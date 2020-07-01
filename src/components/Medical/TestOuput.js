const Test =[
    {
      "text": "Age",
      "name": "Age",
      "type": "integer",
      "min": 0,
      "max": 120,
      "default": 35,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "BMI",
      "name": "BMI",
      "type": "double",
      "min": 11.0,
      "max": 60.0,
      "default": 23.0,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": "",
      "step": 0.1
    },
    {
      "text": "Highest tympanic (ear) temperature measured (Fahrenheit)",
      "name": "Temp",
      "type": "double",
      "min": 95.0,
      "max": 109.0,
      "step": 0.1,
      "default": 98.0,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "Pulse rate (not always equals the heart rate)",
      "name": "HeartRate",
      "type": "integer",
      "min": 0,
      "max": 220,
      "default": 70,
      "category": "Constitutional and vital signs physical examination"
    },
    {
      "text": "Systolic blood pressure",
      "name": "SBP",
      "type": "integer",
      "min": 0,
      "max": 300,
      "default": 115,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "Diastolic blood pressure",
      "name": "DBP",
      "type": "integer",
      "min": 0,
      "max": 180,
      "default": 70,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "Respiratory rate",
      "name": "RR",
      "type": "integer",
      "min": 0,
      "max": 60,
      "default": 15,
      "category": "Constitutional and vital signs physical examination"
    },
    {
      "text": "Arterial O2 (oxygen) saturation (SaO2 %):",
      "name": "O2Sats",
      "type": "integer",
      "min": 0,
      "max": 100,
      "default": 96,
      "category": "Constitutional and vital signs physical examination",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "Supplied air O2 % (FiO2 %), Room air: 21%, Nasal cannula: 1L/min 24%, 2L/min 28%, 3L/min 32%, 4L/min 36%, 5L/min 40%, 6L/min 44% *",
      "name": "Fio2",
      "type": "integer",
      "min": 21,
      "max": 100,
      "default": 21,
      "category": "Constitutional and vital signs physical examination"
    },
    {
      "text": "Unplanned or unexplained weight loss:",
      "name": "WeightLoss",
      "type": "categorical",
      "default": 2,
      "choices": [
        {
          "text": "Data unavailable.",
          "value": 1
        },
        {
          "text": "No unplanned or unexplained weight loss  within the last 6 months.",
          "value": 2
        },
        {
          "text": "Unplanned or unexplained weight loss of less than 10 %  within the last 6 months.",
          "value": 4
        },
        {
          "text": "Unplanned or unexplained weight loss of 10 % or more within the last 6 months.",
          "value": 6
        }
      ],
      "category": "Constitutional & General review of system"
    },
    {
      "text": "Unplanned or unexplained weight gain:",
      "name": "WeightGain",
      "type": "categorical",
      "default": 2,
      "choices": [
        {
          "text": "Data unavailable.",
          "value": 1
        },
        {
          "text": "No unplanned or unexplained weight gain within the last 6 months.",
          "value": 2
        },
        {
          "text": "Unplanned or unexplained weight gain of less than 10 %  within the last 6 months.",
          "value": 4
        },
        {
          "text": "Unplanned or unexplainedweight gain of 10 % or more within the last 6 months.",
          "value": 6
        }
      ],
      "category": "Constitutional & General review of system"
    },
    {
      "text": "History of chills:",
      "name": "Chills",
      "type": "categorical",
      "default": 2,
      "choices": [
        {
          "text": "Data unavailable.",
          "value": 1
        },
        {
          "text": "No. ",
          "value": 2
        },
        {
          "text": "Yes.",
          "value": 3
        }
      ],
      "category": "Constitutional & General review of system"
    },
    {
      "text": "Fevers as temporal artery or ear temp>100.4 F:",
      "name": "HistoryFever",
      "type": "categorical",
      "default": 2,
      "choices": [
        {
          "text": "Data unavailable.",
          "value": 1
        },
        {
          "text": "No recent fever.",
          "value": 2
        },
        {
          "text": "Yes, present.",
          "value": 3
        }
      ],
      "category": "Constitutional & General review of system",
      "subcategory1": "",
      "subcategory2": "",
      "subcategory3": "",
      "subcategory4": ""
    },
    {
      "text": "History of generalized fatigue:",
      "name": "GeneralizedFatigue",
      "type": "categorical",
      "default": 2,
      "choices": [
        {
          "text": "Data unavailable.",
          "value": 1
        },
        {
          "text": "No. ",
          "value": 2
        },
        {
          "text": "Yes.",
          "value": 3
        }
      ],
      "category": "Constitutional & General review of system"
    }]
  
export default Test ;  