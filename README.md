# Melanoma Risk Assessment Application Demo #

https://dancnguyen.github.io/MelanomaRiskAssessmentAppForCS6440Demo/

This is the demo build for the Melanoma Risk Assessment Application created as the Course Practicum for CS6440 for the usability and survey review period.

This web application hosts a neural network built using Tensorflow and Keras in Python to classify Dermatological Skin Growth Images as either Benign Skin Growth images or Malignant Melanoma Images. The model was converted using Tensorflow.js into a format to be implemented into a React Application

The neural network was trained using 36,347 images from the ISIC Archives and tested with an independent dataset of 4,039. Text files listing the image file names that made up the Training Dataset and Testing Dataset are found under the folder TrainingDataset_And_TestingDataset_Image_Names_From_ISIC_Archives in the repository.

Overall Steps in the Project are as follows:
1. Acquire and classify image datasets from ISIC Archives
2. Train and Evaluate neural network models with acquired image datasets and Tensorflow with Keras in Python
3. Convert model into integratable format for web application using Tensorflow.js
4. Integrate and deploy converted model into React Web Application in JavaScript

The set of images used for this project consist of a filtered list of images provided for the 2019 and 2020 ISIC Challenges, as detailed at https://challenge.isic-archive.com/data/. These images are provided under Creative Commons License (CC-BY-NC). The corresponding metadata was used for classifying the images as Benign Skin Growth or Malignant Melanoma

Images were pulled down using the ISIC Web Services and Python through a Jupyter Notebook. The notebook may be found under folder ISICDownloadAndCategorize\ISICDownloadAndCategorize.ipynb

Building training, validating, and testing of the neural network model was performed with Python in a Jupyter Notebook with Tensorflow and Keras. The Jupyter Notebook used for training the model may be found in SourcePython\ModelOptimized.ipynb. The model was saved in an H5 File Format for model reloading and analysis.

The H5 File Format model is found at https://drive.google.com/drive/folders/1_YMVokjMFuIVOIZtKxFBOK54hstYtQs7?usp=sharing. This is because it is greater than 100 mb and has difficulty in hosting in GitHub.

Metric analysis of the model was performed with Python in the Jupyter Notebook under SourcePython\TestReloadModel.ipynb

The model achieved overall 82.89% accuracy when predicting on the testing dataset. On a breakdown, the model predicted 83.82% of all true Benign Skin growth images as true Benign and predicted 16.18% of all true Benign Skin growth images as false Malignant Melanoma. The model predicted 75.85% of true Malignant Melanoma Skin growth images as true Malignant Melanoma and predicted 24.15% of all true Malignan Melanoma Skin growth images as false Benign. The model achieved a Receiver Operating Characteristic curve (ROC curve) Area Under the Curve (AUC) of 0.7984. 

Conversion of the H5 File Format model into an integratable format for a Javascript React Applicaton were performed using Tensorflow.js. The command file used is found under ConvertTensorflowPythonModelToTensorfowJSModel\TensorflowConversion.cmd

Source code for the React Web Application is found under folder SourceReactApp. The files for the converted model are found under SourceReactApp\public\MelanomaModelOptimized.


### References ###
Abadi, M., Agarwal, A., Barham, P., Brevdo, E., Chen, Z., Citro, C., Corrado, G. s., Davis, A., Dean, J., Devin, M., Ghemawat, S., Goodfellow, I., Harp, A., Irving, G., Isard, M., Jia, Y., Kaiser, L., Kudlur, M., Levenberg, J., & Zheng, X. (2015). TensorFlow : Large-Scale Machine Learning on Heterogeneous Distributed Systems. 

Ann vs CNN vs RNN: Types of neural networks. Analytics Vidhya. (2020, Octo-ber 19). Retrieved March 21, 2022, from https://www.analyticsvidhya.com/blog/2020/02/cnn-vs-rnn-vs-mlp-analyzing-3-types-of-neural-networks-in-deep-learning/ 

Chollet, F., & others. (2015). Keras. GitHub. Retrieved from https://github.com/fchollet/keras

Codella, N. C. F., Gutman, D. A., Celebi, M. E., Helba, B., Marchetti, M. A., Dusza, S. W., … Halpern, A. (2017). Skin Lesion Analysis Toward Melanoma Detection: A Challenge at the 2017 International Symposium on Biomedical Imaging (ISBI), Hosted by the International Skin Imaging Collaboration (ISIC). CoRR, abs/1710.05006. Opgehaal van http://arxiv.org/abs/1710.05006

Combalia, M., Codella, N.C., Rotemberg, V.M., Helba, B., Vilaplana, V., Reiter, O., Halpern, A.C., Puig, S., & Malvehy, J. (2019). BCN20000: Dermoscopic Le-sions in the Wild. ArXiv, abs/1908.02288.

Creative Commons. (n.d.). Creative Commons License Deed. Creative Commons - Attribution-NonCommercial 4.0 International - CC BY-NC 4.0. (n.d.). Re-trieved March 13, 2022, from https://creativecommons.org/licenses/by-nc/4.0/ 

Data augmentation :  Tensorflow Core. TensorFlow. (n.d.). Retrieved April 1, 2022, from https://www.tensorflow.org/tutorials/images/data_augmentation

Facebook. (n.d.). Facebook/react: A declarative, efficient, and flexible JavaS-cript library for building user interfaces. GitHub. Retrieved March 7, 2022, from https://github.com/facebook/react

Harris, C. R., Millman, K. J., van der Walt, S. J., Gommers, R., Virtanen, P., Cournapeau, D., … Oliphant, T. E. (2020). Array programming with NumPy. Nature, 585, 357–362. https://doi.org/10.1038/s41586-020-2649-2

Hunter, J. D. (2007). Matplotlib: A 2D graphics environment. Compu-ting in Science &amp; Engineering, 9(3), 90–95.

ISIC. (n.d.). ISIC Challenge. Isic Challenge. Retrieved March 7, 2022, from https://challenge.isic-archive.com/data/

Image classification :  Tensorflow Core. TensorFlow. (n.d.). Retrieved March 25, 2022, from https://www.tensorflow.org/tutorials/images/classification

Rotemberg, V., Kurtansky, N., Betz-Stablein, B., Caffery, L., Chousakos, E., Codella, N., … Soyer, H. P. (2021). A patient-centric dataset of images and metadata for identifying melanomas using clinical context. Scientific Data, 8(1), 34. doi:10.1038/s41597-021-00815-z

Saha, S. (2018, December 17). A comprehensive guide to Convolutional Neural Networks - the eli5 way. Medium. Retrieved March 21, 2022, from https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53 

Smilkov, D., Thorat, N., Assogba, Y., Yuan, A., Kreeger, N., Yu, P., … Wattenberg, M. (2019). TensorFlow.js: Machine Learning for the Web and Beyond. CoRR, abs/1901.05350. Opgehaal van http://arxiv.org/abs/1901.05350

Seaborn.heatmap. seaborn.heatmap - seaborn 0.11.2 documentation. (n.d.). Re-trieved April 15, 2022, from https://seaborn.pydata.org/generated/seaborn.heatmap.html

Sklearn.metrics.confusion_matrix. scikit. (n.d.). Retrieved April 15, 2022, from https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html

Tf.data.Dataset  :   Tensorflow core v2.8.0. TensorFlow. (n.d.). Retrieved April 1, 2022, from https://www.tensorflow.org/api_docs/python/tf/data/Dataset

Tf.keras.utils.callbacks.EarlyStopping  :   Tensorflow core v2.8.0. TensorFlow. (n.d.). Retrieved April 2, 2022, from https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/EarlyStopping

Tf.keras.utils.image_dataset_from_directory  :   Tensorflow core v2.8.0. TensorFlow. (n.d.). Retrieved March 25, 2022, from https://www.tensorflow.org/api_docs/python/tf/keras/utils/image_dataset_from_directory 

Tf.keras.layers.Dropout  :   Tensorflow core v2.8.0. TensorFlow. (n.d.). Retrieved April 2, 2022, from https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout

The sequential model  :   Tensorflow Core. TensorFlow. (n.d.). Retrieved March 21, 2022, from https://www.tensorflow.org/guide/keras/sequential_model 

Tschandl, P., Rosendahl, C., & Kittler, H. (2018). The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. Scientific data, 5, 180161. https://doi.org/10.1038/sdata.2018.161


