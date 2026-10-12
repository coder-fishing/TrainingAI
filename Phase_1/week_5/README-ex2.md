# Titanic — ex2 report

## Method
Binary classification, stratified Train/Test 80/20, 5-fold CV on Train.
Missing values, encoding and scaling performed before splitting.
Selected model: Random Forest, chosen by mean CV F1=0.7311.

## Cross-validation
```text
              Model  Accuracy  Precision  Recall     F1  F1 std
      Random Forest    0.7992     0.7544  0.7106 0.7311  0.0256
Logistic Regression    0.8006     0.7625  0.6997 0.7288  0.0217
          LinearSVC    0.7908     0.7460  0.6923 0.7173  0.0217
```

## Test evaluation
```text
              precision    recall  f1-score   support

           0     0.8305    0.8909    0.8596       110
           1     0.8033    0.7101    0.7538        69

    accuracy                         0.8212       179
   macro avg     0.8169    0.8005    0.8067       179
weighted avg     0.8200    0.8212    0.8189       179

```
TN=98, FP=12, FN=20, TP=49.
FP: predicted survival incorrectly. FN: predicted non-survival incorrectly.

## Error analysis
Incorrect predictions: 32. Investigate missing age and similar passenger profiles;
these are hypotheses rather than proven causes.
```text
                                             Name  Pclass     Sex   Age  SibSp  Parch     Fare Embarked  Actual  Predicted      Error type
553             Leeni, Mr. Fahim ("Philip Zenni")       3    male  22.0      0      0    7.225        C       1          0  False Negative
559  de Messemaeker, Mrs. Guillaume Joseph (Emma)       3  female  36.0      1      0   17.400        S       1          0  False Negative
536             Butt, Major. Archibald Willingham       1    male  45.0      0      0   26.550        S       0          1  False Positive
27                 Fortune, Mr. Charles Alexander       1    male  19.0      3      2  263.000        S       0          1  False Positive
712                      Taylor, Mr. Elmer Zebley       1    male  48.0      1      0   52.000        S       1          0  False Negative
```

## Interpretation
Feature importance; model influence does not establish causality.
```text
   Feature    Value
      Fare 0.256730
       Age 0.243582
  Sex_male 0.154490
Sex_female 0.131229
  Pclass_3 0.048833
     SibSp 0.045505
     Parch 0.033632
  Pclass_1 0.032193
Embarked_S 0.017988
  Pclass_2 0.016983
```

## Limitations and improvements
Preprocessing before splitting causes data leakage; scores may be optimistic.
Small historical dataset, one split, no tuning; close CV scores may not imply a stable ranking.
Improve preprocessing inside folds, tuning and FamilySize/IsAlone/title features.

## Deployment and conclusion
ex2_model.joblib stores the model and preprocessing parameters.
Monitor input schema, missing values, unknown categories, drift and labeled metrics.
Random Forest: Test F1=0.7538. This is a learning baseline.
