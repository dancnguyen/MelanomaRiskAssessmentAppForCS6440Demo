import './App.css';
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import { DropzoneArea } from "material-ui-dropzone";

function App() {
  const labelNames = ["BENIGN", "MALIGNANT MELANOMA"];
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [predictionProbabilityBenign, setPredictionProbabilityBenign] = useState(null);
  const [predictionProbabilityMalignant, setPredictionProbabilityMalignant] = useState(null);

  useEffect(() => {
    const modelFile = "MelanomaModelOptimized/model.json";
    tf.loadGraphModel(modelFile).then(model => { setModel(model) });
  }, []);

  const executePrediction = async (inputFiles) => {
    if (inputFiles.length === 1) {
      const readImage = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(inputFiles[0]);
      })
      const inputImage = await new Promise((resolve) => {
        const sourceImage = new Image();
        sourceImage.onload = () => resolve(sourceImage);
        sourceImage.src = readImage;
      })

      const [prediction, predictionProbabilityBenign, predictionProbabilityMalignant] = tf.tidy(() => {
        const resizeHeight = 256;
        const resizeWidth = 256

        const preProcessedImage = tf.browser.fromPixels(inputImage).resizeNearestNeighbor([resizeHeight, resizeWidth]).toFloat().expandDims();
        const modelPrediction = model.predict(preProcessedImage);
        const probabilities = modelPrediction.softmax().dataSync();

        const index = modelPrediction.as1D().argMax().dataSync()[0];
        const prediction = labelNames[index];
        const predictionProbabilityBenign = (probabilities[0] * 100).toFixed(2);
        const predictionProbabilityMalignant = (probabilities[1] * 100).toFixed(2);
        return [prediction, predictionProbabilityBenign, predictionProbabilityMalignant];
      });

      setPrediction(prediction);
      setPredictionProbabilityBenign(predictionProbabilityBenign);
      setPredictionProbabilityMalignant(predictionProbabilityMalignant);
    }
    else {
      setPrediction(null);
      setPredictionProbabilityBenign(null);
      setPredictionProbabilityMalignant(null);
    }
  };

  return (
    <div>
      <div className='pageTitle'>
        <h1>Melanoma Risk Assessment Tool</h1>
      </div>
      <div className='instructions'>
        <h2>WARNING: THIS TOOL IS MEANT FOR POTENTIAL RISK ASSESSMENT ONLY! A LICENSED DERMATOLOGIST IS REQUIRED FOR A FINAL DIAGNOSIS!</h2>
        <h2>For more information about this project, please visit the open source GitHub at this <a href="https://github.com/dancnguyen/MelanomaRiskAssessmentAppForCS6440Demo" target="_blank" rel="noreferrer">link</a>.</h2>
        <br></br>
        <h3>Welcome to the Melanoma Risk Assessment Tool!</h3>
        <h3>The purpose of this tool is to provide a simple, reasonably accurate application for individuals to </h3>
        <h3>assess if a suspected dermatological skin growth may be caused by a malignant melanoma </h3>
        <h3>cancer growth or may be caused by a benign skin growth. </h3>
        <br></br>
        <h3>This tool is powered by a Machine Learning Neural Network trained on 36,347 images from the ISIC Archives.</h3>
        <h3>Images were classified as Malignant Melanoma or Benign Skin Growths.</h3>
        <br></br>
        <h3>The tool was evaluated against an independent testing dataset of 4,039 images.</h3>
        <h3>This tool achieved an overall accuracy of 82.89% from the testing dataset.</h3>
        <h3>This tool correctly identified 83.82% of true Benign Skin Growths from the testing dataset.</h3>
        <h3>This tool correctly identified 75.85% of true Malignant Melanoma Skin Growths from the testing dataset.</h3>
        <br></br>
        <h2>INSTRUCTIONS</h2>
        <h2>STEP 1: Please select an image that fully encapsulates the skin growth area and its borders.</h2>
        <h2>STEP 2: Please click on the area below to input your skin growth image.</h2>
        <h2>STEP 3: Please completely read and interpret the processed results.</h2>
        <br></br>
      </div>
      <div className='inputArea'>
        <DropzoneArea acceptedFiles={["image/*"]} onChange={executePrediction} filesLimit={1} showAlerts={["error"]} />
      </div>
      <div className='outputResult'>
        { prediction != null && <h2>Prediction:<br></br>{prediction}</h2> }
      </div>
      <div className='outputProbability'>
        { predictionProbabilityBenign != null && <h2>Probability Benign Skin Growth:<br></br>{predictionProbabilityBenign}%</h2> }
      </div>
      <div className='outputProbability'>
        { predictionProbabilityMalignant != null && <h2>Probability Malignant Melanoma Skin Growth:<br></br>{predictionProbabilityMalignant}%</h2> }
      </div>
      <div className='outputDescription'>
        {
          prediction != null && prediction === "BENIGN" && 
          <h2>Your skin growth image has been classified as a Benign Skin Growth.<br></br>
          This means that the tool has identified that the submitted image may be negative for Melanoma Skin Cancer.<br></br>Predictions are made from the class with the highest probability output from the model.<br></br>This tool has been evaluated to accurately identify 83.82% of true Benign Skin Growth images from an independent testing dataset.<br></br>Please speak to a licensed dermatologist for a final diagnosis!</h2>
        }
      </div>
      <div className='outputDescription'>
        {
          prediction != null && prediction === "MALIGNANT MELANOMA" && 
          <h2>Your skin growth image has been classified as a Malignant Melanoma Skin Growth.<br></br>
          This means that the tool has identified that the submitted image may be positive for Melanoma Skin Cancer.<br></br>Predictions are made from the class with the highest probability output from the model.<br></br>This tool has been evaluated to accurately identify 75.85% of true Malignant Melanoma Skin Growth images from an independent testing dataset.<br></br>Please speak to a licensed dermatologist for a final diagnosis!</h2>
        }
      </div>
    </div>
  );
}

export default App;