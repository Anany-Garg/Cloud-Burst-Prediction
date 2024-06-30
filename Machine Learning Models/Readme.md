This file contains all the machine learning models we have used in making of the predictions.The Challenge to the problem of Cloudburst prediction was that the occurenece of cloudburst
prediction is a very rare
phenomenon and hence trying to approach to solve it in a ways of Data Mining puts forth an extremely skewed dataset which means it is just very challenging to 
find a structure for positive cases as well. 
We know that there is a standard as to when an rainfall can be classified as a Cloudburst i.e. more than 100 mm per hour of rainfall in a region.
So one of approaches is to instead of finding out the structure in amount of rainfall instead , which we can easily find as rainfall is not a rare occurence 
and we can train a model for the same , 
now in order to find out the the possiblity of occurenece of Cloudburst we have found out the probability of amount of rainfall is greater than 100 mm per hour
in any region at any instant of
the day which we have estimated using churnoff 's inequality.
For this task we have used tried many machine learning algorithm for the same like KNN, Random Forest , XGBoost.Out of which We have deduced the XGBoost 
always tended to perform by considerably good margain
We have also used ARIMA(Auto Regression Integrated Moving Average) which is basically a n intensified LSTM to handle time series sequential data to predict rainfall.
The reason we have emplored to not just rely on time series analysis using ARIMA on a time series dataset is because ARIMA is based on a particular Location and 
trained on the Weather Data of that location area
the problem statement highlighted the existence of local meterological agencies , which would mean it might not be feasible enough to try and make a localised model 
at every such agencies , which means there is need for existence of model that identifies the weather pattern based on the current weather patterns and 
not highly dependent on the climate(or the past data), although it might not be as accurate but still a 
good approach which we can use to ensemble and find out the probability.
Another one of the approaches was to use Hedge Algorithm for online data akin to Expert Advice.
The implementation was used on the ensemble of models (Neural Network, XGBoost, RandomForest Regressor and KNN Regressor) not only to add to its robustness
but also suit the versality of the already meagre data present.
