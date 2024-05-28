# Pipe Masters

## Introduction and Context

This repository ***is not*** a fully-fledged, feature-full AI CI/CD leaderboard application. It is a simple UI component behind a simple API that illustrates an idea:

> *What is the best way to accelerate the continuous improvement of prediction models in production? A CI/CD Leaderboard*


![pipe masters-min](https://github.com/TimothySimons/pipe-masters/assets/42070232/7bfea8e7-279e-4dfb-9a7d-6841daaafd51)
Inspired by [Kaggle](https://www.kaggle.com/), whose community has successfully produced the highest scoring prediction models across many different domains.

## Benefits of a CI/CD Leaderboard

This short write-up argues that a CI/CD leaderboard is the ideal approach. It has several key advantages:

* Leverages CI/CD to produce robust and reliable software
* Provides an objective and unbiased measure of performance
  
* Encourages exploration of the solution space
* Converges towards an optimal solution
  
* It is a historical view of model performance and progress
* Offers relevant retrospective analysis.

## Important Considerations

Prediction models should be evaluated using a validation dataset and then chosen based on their performance against a separate, unseen final test dataset. This ensures:

* **Reducing overfitting:** By using a separate test set for final selection, you mitigate the risk of overfitting to the validation set.
  
* **Improved generalisation:** The hidden test set ensures that the selected model generalises well to unseen data.
  
* **Fair evaluation:** The final selection process provides a fair and objective evaluation of the models.

