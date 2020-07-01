const SymptomOutput =[
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
  },
  {
    "text": "History of decreased or depressed mood:",
    "name": "DecreasedMood",
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
    "text": "Is patient able to walk by himself:",
    "name": "Ambulation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Yes. ",
        "value": 2
      },
      {
        "text": "Yes. But only for minimal distance.",
        "value": 3
      },
      {
        "text": "No.",
        "value": 4
      }
    ],
    "category": "Constitutional & General review of system"
  },
  {
    "name": "NHLongTermResidency",
    "text": "Patient stays at a nursing home or long-term care facility ?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is patient fasting (at least 6 hours NPO):",
    "name": "Fasting",
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
    "name": "RecentHospitalStay",
    "text": "Has this patient been hospitalized for at least 48 hours within the preceding 90 days ?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Did patient recently have close contact with somebody sick (i.e., common cold, upper respiratory tract infection, pneumonia):",
    "name": "Contacts",
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
      },
      {
        "text": "...",
        "value": 4
      }
    ],
    "category": "Constitutional & General review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Respiratory or cardiac arrest recently:",
    "name": "Arrest",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent cardiac or respiratory arrest.",
        "value": 2
      },
      {
        "text": "Currently or just recently in cardiac or respiratory arrest.",
        "value": 3
      }
    ],
    "category": "Constitutional & General review of system"
  },
  {
    "text": "History of hypotension (i.e., septic shock, bleeding or during general anesthesia) recently:",
    "name": "HypoTension",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent history of hypotension.",
        "value": 2
      },
      {
        "text": "Currently or just recently was hypotensive.",
        "value": 3
      }
    ],
    "category": "Constitutional & General review of system"
  },
  {
    "text": "Any indwelling catheters present (i.e. central line, picc line, chemotherapy ports):",
    "name": "IndwellingCatheters",
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
    "category": "Constitutional & General review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Use of new detergents, cosmetics, soaps, etc. :",
    "name": "NewDetergents",
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
    "category": "Constitutional & General review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Recent consumption of new meals, new foods:",
    "name": "NewFoods",
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
        "text": "Yes",
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
    "text": "Recent history of acute loss of visual acuity:",
    "name": "VisualAcuityRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, unilateral.",
        "value": 3
      },
      {
        "text": "Yes, bilateral.",
        "value": 4
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Recent history of acute blindness:",
    "name": "BlindnessRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, unilateral.",
        "value": 3
      },
      {
        "text": "Yes, bilateral.",
        "value": 4
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Recent history of double vision:",
    "name": "DoubleVisionRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Periodically occurring i.e. when tired, at evenings.",
        "value": 3
      },
      {
        "text": "Yes. Permanently present.",
        "value": 4
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Recent history of yellow sclerae:",
    "name": "YellowScleraeRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "History of eyes itchiness:",
    "name": "EyesItchy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Recent history of sneezing:",
    "name": "Sneezing",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Recent history of loss smell or decrease in smell:",
    "name": "LossOfSmell",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Recent history of loss taste or decrease in taste:",
    "name": "LossOfTaste",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of postnasal drainage :",
    "name": "PostNasalDrainage",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Nasal congestion, or runny nose present?",
    "name": "RunnyNoseCongestion",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of bleeding from gums during brushing the teeth ?",
    "name": "EasyBleedingFromGums",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of pain around the perinasal sinuses:",
    "name": "SinusesPainRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Eyes itchiness, sneezing, postnasal drainage, if present, related to a given time of the year:",
    "name": "Seasonal",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "History of hoarseness?",
    "name": "Hoarseness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No hoarseness.",
        "value": 2
      },
      {
        "text": "Hoarseness present.",
        "value": 4
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Currently present angioedema?",
    "name": "Angioedema",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No angioedema.",
        "value": 2
      },
      {
        "text": "Angioedema present (for example on on lips, tongue, palate or anywhere else).",
        "value": 4
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Pain of larynx with talking/coughing:",
    "name": "LarynxPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Pain absent.",
        "value": 2
      },
      {
        "text": "Pain present.",
        "value": 4
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Sore throat:",
    "name": "SoreThroatROS",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Pain absent.",
        "value": 2
      },
      {
        "text": "Pain present now or just recently.",
        "value": 4
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Trismus (inability to open the jaw):",
    "name": "Trismus",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent",
        "value": 2
      },
      {
        "text": "Present",
        "value": 4
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Mouth (oral) aphtous ulcers:",
    "name": "AphtousUlcers",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent",
        "value": 2
      },
      {
        "text": "Present",
        "value": 4
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Pain behind jaw angle:",
    "name": "PainBehindJawAngle",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent",
        "value": 2
      },
      {
        "text": "Present - unilateral.",
        "value": 4
      },
      {
        "text": "Present - bilateral.",
        "value": 5
      },
      {
        "text": null,
        "value": 6
      }
    ],
    "category": "HEENT review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of ear pain:",
    "name": "EarPainRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Periodic, intermittent. It has been however showing up only for periods shorter than 24 hours before it resolves or there is no ear pain now and no pain meds pain have been used recently (at the time of examination).",
        "value": 3
      },
      {
        "text": "Yes.  Not intermittent. It has been lasting for more than 24 hours and is present now (at the time of examination). ",
        "value": 4
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "History of hearing loss:",
    "name": "HearingLossRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. One ear affected. Periodic, intermittent. It has been however showing up only for periods shorter than 24 hours before it resolves.",
        "value": 3
      },
      {
        "text": "Yes. Both ears affected. Periodic, intermittent. It has been however showing up only for periods shorter than 24 hours before it resolves.",
        "value": 4
      },
      {
        "text": "Yes. One ear affected. Not intermittent. It has been lasting for more than 24 hours and is present at the time of examination. ",
        "value": 5
      },
      {
        "text": "Yes. Both ears affected. Not intermittent. It has been lasting for more than 24 hours and is present at the time of examination.",
        "value": 6
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "History of ear discharge:",
    "name": "EarDCRos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "HEENT review of system"
  },
  {
    "text": "Orthopnea by history:",
    "name": "OrthopneaHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No orthopnea.",
        "value": 2
      },
      {
        "text": "Orthopnea present.",
        "value": 3
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Paroxysmal nocturnal dyspnea presence (PND) by history:",
    "name": "ParoxysmalNDHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No PND.",
        "value": 2
      },
      {
        "text": "History of PND present.",
        "value": 3
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of chest pains or discomforts triggered or exacerbated by physical activity or emotional excitment? ",
    "name": "ChestPainAnginaYesNo",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no history of chest discomfort (pain) triggered or exacerbated by physical activity or emotional excitement.",
        "value": 2
      },
      {
        "text": "There is a history of chest discomfort (pain) triggered or exacerbated by physical activity or emotional excitement; however, chest discomfort is not present now.",
        "value": 3
      },
      {
        "text": "There is a history of chest discomfort (pain) triggered or exacerbated by physical activity or emotional excitement; however, chest discomfort is not present now.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of an increase in severity, or frequency of chest discomfort (pain) triggered or exacerbated by physical activity or emotional excitement, or the patient had to avoid these not to precipitate the discomfort?",
    "name": "ChestPainAginaStabilitySeverity",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort in chest.",
        "value": 2
      },
      {
        "text": "This chest discomfort is stable",
        "value": 3
      },
      {
        "text": "No, it has not been more severe, but patient has been avoiding exertion or emotional excitement to not trigger or exacerbate it.",
        "value": 4
      },
      {
        "text": "Yes, it has been more severe.",
        "value": 5
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is exercise tolerance due to dyspnea decreased:",
    "name": "ExerciseTollerance",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No limitations to exercise tolerance.",
        "value": 2
      },
      {
        "text": "Mild limitations of exercise tolerance with dyspnea easily allowing for ordinary activity.",
        "value": 3
      },
      {
        "text": "Marked limitations of exercise tolerance with dyspnea apparent with less than ordinary (walking less than 100m) activity. Comfortable at rest.",
        "value": 4
      },
      {
        "text": "Severe limitations of exercise tolerance with minimal activity.",
        "value": 5
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has any chest pain or discomfort or the one triggered or exacerbated by physical activity or emotional excitement been recently more frequent ?",
    "name": "ChestPainAginaStabilityFrequency",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort.",
        "value": 2
      },
      {
        "text": "No, it has not been more frequent.",
        "value": 3
      },
      {
        "text": "No, it has not been more frequent, but patient has been avoiding exertion or emotional excitement to not trigger it.",
        "value": 4
      },
      {
        "text": "Yes, it has been more frequent.",
        "value": 5
      },
      {
        "text": "It is very recent since this chest pain started so patient can't answer this question.",
        "value": 6
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Has the chest pain or discomfort episodes (if present) which are triggered or exacerbated by physical activity or emotional excitement been longer ?",
    "name": "ChestPainAginaStabilityLast",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort.",
        "value": 2
      },
      {
        "text": "No, it has not been lasting longer once triggered.",
        "value": 3
      },
      {
        "text": "No, it has not been lasting longer, but patient has been avoiding exertion or emotional excitement to not make it last.",
        "value": 4
      },
      {
        "text": "Yes, it has been lasting longer once triggered.",
        "value": 5
      },
      {
        "text": "It is very recent since this chest pain started so patient can't answer this question.",
        "value": 6
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "What is the quality of the chest pain or discomfort ?",
    "name": "ChestPainQuality",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No chest pains or discomforts.",
        "value": 2
      },
      {
        "text": "It is burning like.",
        "value": 3
      },
      {
        "text": "It is pressure like.",
        "value": 4
      },
      {
        "text": "It is like aching.",
        "value": 5
      },
      {
        "text": "It is like feeling fullness or heavinessin in the chest.",
        "value": 6
      },
      {
        "text": "It is sharp.",
        "value": 7
      },
      {
        "text": "It is felt differently.",
        "value": 8
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "How long does the chest pain or discomfort last, once it is triggered / since it is started (if this is new pain)?",
    "name": "ChestPainLasts",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "The chest pain is constantly present (it may or not vary in intensity) or there is no chest pains at all.",
        "value": 2
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 2 seconds.",
        "value": 3
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 10 seconds.",
        "value": 4
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 30 seconds.",
        "value": 5
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 4 minutes.",
        "value": 6
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 30 minutes.",
        "value": 7
      },
      {
        "text": "Chest pain, once it appears, is constantly present for 30 minutes to 1 hour.",
        "value": 8
      },
      {
        "text": "Chest pain, once it appears, is constantly present for up to 12 hours.",
        "value": 9
      },
      {
        "text": "Chest pain, once it appears, is constantly present for 12 to 48 hours.",
        "value": 10
      },
      {
        "text": "Chest pain, once it appears, is constantly present for 48 hours to couple of days or longer.",
        "value": 11
      },
      {
        "text": "To early to say how long the chest pain will last, it started minutes to 12 hours ago, and is constantly present since then.",
        "value": 12
      },
      {
        "text": "To early to say how long the chest pain will last, it started 12 hours to couple of days ago, and is constantly present since then.",
        "value": 13
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Where is the chest pain or chest discomfort radiating ?",
    "name": "ChestPainRadiation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "It is not radiating or there is no chest pain or discomfort at all.",
        "value": 2
      },
      {
        "text": "To the jaw, left or right shoulder or upper extremity.",
        "value": 3
      },
      {
        "text": "To the back.",
        "value": 4
      },
      {
        "text": "To the abdomen.",
        "value": 5
      },
      {
        "text": "To multiple mentioned above places.",
        "value": 6
      },
      {
        "text": "To other, not mentioned above places.",
        "value": 7
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Where these chest pain or discomfort episodes, are felt ?",
    "name": "ChestPainAginaLocalized",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort.",
        "value": 2
      },
      {
        "text": "In various areas, at least 3 different areas of the chest.",
        "value": 3
      },
      {
        "text": "In 1 or 2 areas of the chest.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Has the chest pain or discomfort been resolving after nitroglycerine use ?",
    "name": "ChestPainAginaNitro",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort, or nitroglycerine was never tried for the pain.",
        "value": 2
      },
      {
        "text": "Yes, the nitroglycerin decreases or relieves the chest pain completely.",
        "value": 3
      },
      {
        "text": "No, the nitroglycerine doesn't relieve the pain.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Has the chest pain been resolving after rest?",
    "name": "ChestPainAginaRest",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no such a pain or discomfort or the rest does not relieve the pain.",
        "value": 2
      },
      {
        "text": "Yes, chest pains decrease or go away completely after rest.",
        "value": 3
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Subjective sensation of irregular or overly fast heartbeats:",
    "name": "Arrhythmia",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No sensation of arrhythmia present.",
        "value": 2
      },
      {
        "text": "Arrhythmia is present in episodes, and at most, it is just skipping or jumping of a single irregular heartbeat episodically.",
        "value": 3
      },
      {
        "text": "Arrhythmia is present in episodes, and at most, it is just skipping or jumping of couple of irregular or overly fast heartbeats in a row.",
        "value": 4
      },
      {
        "text": "Arrhythmia is present in episodes, and at most, it is couple of minutes runs of irregular or overly fast heartbeats. Currently it is absent.",
        "value": 5
      },
      {
        "text": "Irregular or overly fast heartbeats are constantly present or appear in long episodes lasting minutes to days, or started minutes ago, are currently present and can't say yet how long they will last.",
        "value": 6
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "When irregular heartbeats are present patient feels lightheadedness at the same time:",
    "name": "ArrhythmiaSymptomsLightheadedness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No arrhythmia present.",
        "value": 2
      },
      {
        "text": "No sensation of lightheadedness when arrhythmia is present.",
        "value": 3
      },
      {
        "text": "Yes, patient has sensation of lightheadedness when arrhythmia is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "When irregular heartbeats are present patient feels chest pain or chest discomfort at the same time:",
    "name": "ArrhythmiaSymptomsChestPains",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No arrhythmia present.",
        "value": 2
      },
      {
        "text": "No sensation of chest pain or discomfort when arrhythmia is present.",
        "value": 3
      },
      {
        "text": "Yes, patient has sensation of chest pain or chest discomfort when arrhythmia is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "When irregular heartbeats episodes are present patient feels weak:",
    "name": "ArrhythmiaSymptomsWeakness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No arrhythmia present.",
        "value": 2
      },
      {
        "text": "No weakness during the arrhythmia episodes.",
        "value": 3
      },
      {
        "text": "Yes, patient feels weak when arrhythmia is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "When irregular heartbeats are present patient feels headaches at the same time:",
    "name": "ArrhythmiaSymptomsHeadaches",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No arrhythmia present.",
        "value": 2
      },
      {
        "text": "No sensation of headaches when arrhythmia is present.",
        "value": 3
      },
      {
        "text": "Yes, patient has sensation of headaches when arrhythmia is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "When irregular heartbeats are present patient sweats at the same time:",
    "name": "ArrhythmiaSymptomsSweats",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No arrhythmia present.",
        "value": 2
      },
      {
        "text": "No sweats when arrhythmia is present.",
        "value": 3
      },
      {
        "text": "Yes, patient has sweats when arrhythmia is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "Symptoms of DVT (deep vein thrombosis) or SVT (superficial vein thrombosis), on any extremity (unilateral or asymetric extremity edema, engorged superficial veins especially when asymmetric, unexplained erythema or warmth of the extremity):",
    "name": "DVTSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, such history now or recently.",
        "value": 2
      },
      {
        "text": "Yes, symptoms of DVT or SVT present now or recently.",
        "value": 3
      }
    ],
    "category": "Cardiovascular review of system"
  },
  {
    "text": "What is the severity of dyspnea (shortness of breath)?",
    "name": "DyspneaSeveritySubjective",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient has no limitation of physical activity and ordinary usual physical activity does not cause singificant fatigue, or dyspnea (shortness of breath)",
        "value": 2
      },
      {
        "text": "Patient has mild limitation of physical activity, but patient is comfortable at rest. Ordinary usual physical activity results in fatigue, dyspnea (shortness of breath).",
        "value": "3"
      },
      {
        "text": "Patient has marked limitation of physical activity, but comfortable at rest. Patient experiences fatigue, or dyspnea even with less than ordinary activity.",
        "value": "4"
      },
      {
        "text": "Patient is unable to carry on any physical activity without discomfort and symptoms of dyspnea or fatigue are even present at rest. Additionally any physical activity increases patient's discomfort.",
        "value": 5
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Dyspnea progression timing",
    "name": "DyspneaProgressionSubjective",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": "1"
      },
      {
        "text": "No dyspnea at all.",
        "value": "2"
      },
      {
        "text": "Over last minutes to 1 hours.",
        "value": "3"
      },
      {
        "text": "Over 1 hours to 1 days.",
        "value": 4
      },
      {
        "text": "Over 1 - 7 days.",
        "value": 6
      },
      {
        "text": "Over 1- 4 weeks.",
        "value": 7
      },
      {
        "text": "Over 1 or more months.",
        "value": 9
      }
    ],
    "category": "Cardiovascular review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Any episodes of dyspnea associated with severe anxiety?",
    "name": "DyspneaAnxiety",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Any episodes of dyspnea associated with tingling of fingertips and area around the mouth ?",
    "name": "DyspneaTingling",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Any episodes of dyspnea associated with lightheadedness?",
    "name": "DyspneaLightheadedness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Any episodes of dyspnea resolve when breathing with plastic or paper bag (re-breather) ?",
    "name": "DyspneaBag",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is the amount of sputum produced with cough (or suction from endotracheal tube if patient is intubated)?",
    "name": "MucousProduction",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No airways' mucus production.",
        "value": 2
      },
      {
        "text": "Minimal airways' mucus, rarely.",
        "value": 3
      },
      {
        "text": "Moderate airways' mucus with each cough spell.",
        "value": 4
      },
      {
        "text": "Severe airways' mucus, mouth-full with each cough spell.",
        "value": 5
      },
      {
        "text": "...",
        "value": 6
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has sputum production increased within the last days?",
    "name": "MucousProductionInc",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No increase in amount of airways' mucus, or no mucus at all.",
        "value": 2
      },
      {
        "text": "Yes, there is ncrease in amount of airways' mucus.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is airways' sputum best described as?",
    "name": "MucusFeatures",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No airways' mucus at all.",
        "value": 2
      },
      {
        "text": "Translucent saliva like airways' mucus",
        "value": 3
      },
      {
        "text": "Frothy, possibly even pink airways' mucus.",
        "value": 4
      },
      {
        "text": "Thick, any airways' mucus.",
        "value": 5
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has sputum color changed over last days?",
    "name": "MucousCharacter",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, airways' mucus color not changed, or no airways' mucus production at all.",
        "value": 2
      },
      {
        "text": "Yes, airways' mucus color has changed.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is the severity of cough?",
    "name": "SeverityCough",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No cough.",
        "value": 2
      },
      {
        "text": "Mild cough.",
        "value": 3
      },
      {
        "text": "Moderate cough.",
        "value": 4
      },
      {
        "text": "Severe cough.",
        "value": 5
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a recent history of wheezing?",
    "name": "WheezingH",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No wheezing.",
        "value": 2
      },
      {
        "text": "Wheezing with expiration.",
        "value": 3
      },
      {
        "text": "Wheezing on inspiratio.",
        "value": 4
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a remote history of wheezing?",
    "name": "WheezingEpisodic",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, wheezing. Ever.",
        "value": 2
      },
      {
        "text": "Patient has had episodes of wheezing in the past.",
        "value": 3
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is the amount of hemoptysis?",
    "name": "HemoptysisTiming",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent hemoptysis.",
        "value": 2
      },
      {
        "text": "Minimal hemoptysis in sputum or in endotracheal tube.",
        "value": 3
      },
      {
        "text": "Severe, amount of hemoptysis > 400cc  within last 24H.",
        "value": 4
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there pleuritic (i.e. with cough or with relation to breath phase) or positional (i.e. not felt or diminished with leaning forward) chest discomfrot (pain)?",
    "name": "ChestPainPleuriticPulm",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No pleuritic chest pain.",
        "value": 2
      },
      {
        "text": "Present - mild or moderate.",
        "value": 3
      },
      {
        "text": "Present - severe.",
        "value": 4
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is the pleuritic chest discomfort's (pain's) severity progression?",
    "name": "ChestPainProgressionPulm",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no pleuritic chest pain at all.",
        "value": 2
      },
      {
        "text": "Chest pain started and progressed gradually.",
        "value": 3
      },
      {
        "text": "Chest discomfort's (pain's) severity rose abruptly (within seconds).",
        "value": 4
      },
      {
        "text": "...",
        "value": 5
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of snoring?",
    "name": "Snoring",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No snoring.",
        "value": 2
      },
      {
        "text": "Snoring present.",
        "value": 4
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there daytime sleepiness (drowsiness)?",
    "name": "DayTimeSleepiness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no daytime sleepiness (drowsiness).",
        "value": 2
      },
      {
        "text": "Patient is sleepy (drowsy) during days, but never had fallen asleep while driving, talking or at work.",
        "value": 3
      },
      {
        "text": "Patient is sleepy (drowsy) during days, had fallen asleep while driving, talking or at work. ",
        "value": 4
      }
    ],
    "category": "Respiratory review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of dry skin?",
    "name": "SkinMoistureHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of skin bruising, either spontaneous or after minimal trauma?",
    "name": "EasyBruising",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of diaphoresis (excessive sweating)?",
    "name": "SkinSweatingHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of jaundice?",
    "name": "JaundiceHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of hirsutism (excessive growth of dark or coarse hair in a male-like pattern on face, chest and back in females)?",
    "name": "HirsutismHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of skin macules:",
    "name": "SkinErythemamaculesRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of skin papules:",
    "name": "SkinErythemapapulesRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of skin pustules:",
    "name": "SkinErythemapustulesRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of skin petechiae or hemorrhaging changes:",
    "name": "SkinPetechiaeRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of urticaria (hives):",
    "name": "SkinUrticariaRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of episodes of cutaneous flushing:",
    "name": "SkinFlushes",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. They could have been triggered by eating, alcohol, anesthesia, bowel movements and /or emotions. They have been lasting between 1 and 30 minutes. They were associated with diarrhea and or wheezing, sometimes tachycardia and hypotension.",
        "value": 3
      },
      {
        "text": "Yes, other kind of cutanous flushing.",
        "value": 4
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of recent zoster or cold sores (herpetic) rash:",
    "name": "SkinHerpesRashHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of skin itchiness (besides the perineal and perianal areas) :",
    "name": "SkinItchinessHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history, but limited to some areas (i.e. where rash is)",
        "value": 3
      },
      {
        "text": "Yes, there is such a history, generalized.",
        "value": 4
      },
      {
        "text": "...",
        "value": 5
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of perineal itchiness:",
    "name": "PerineumItchinessHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "History of perianal area itchiness:",
    "name": "PerianalItchinessHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin review of system"
  },
  {
    "text": "Is there a history of nausea?",
    "name": "Nausea",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No nausea.",
        "value": 2
      },
      {
        "text": "Nausea intermittently present from the beginning of symptoms.",
        "value": 3
      },
      {
        "text": "Nausea constantly present from the beginning of symptoms.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of vomiting?",
    "name": "Vomiting",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No vomiting.",
        "value": 2
      },
      {
        "text": "Vomiting, up to 2 times in any 24 hours on from the beginning of symptoms.",
        "value": 3
      },
      {
        "text": "Vomiting, at least 3 times, but not more than 10 times, in any 24 hours on average from the beginning of symptoms.",
        "value": 4
      },
      {
        "text": "Vomiting, at least 10 times or more in any 24 hours from the beginning of symptoms.",
        "value": 5
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there clubbing of the fingers?",
    "name": "FingersClubbing",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Skin review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there dry retching (separate from vomiting if any present)?",
    "name": "DryRetching",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No dry retching.",
        "value": 2
      },
      {
        "text": "Dry retching, up to 5 times in any 24 hours on average from the beginning of symptoms.",
        "value": 3
      },
      {
        "text": "Dry retching, at least 6 times, but not more than 10 times, in any 24 hours on average from the beginning of symptoms.",
        "value": 4
      },
      {
        "text": "Dry retching, at least 10 times or more in any 24 hours from the beginning of symptoms.",
        "value": 5
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Heartburn, as a symptom of gastroesophageal reflux:",
    "name": "HeartBurn",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No heartburn.",
        "value": 2
      },
      {
        "text": "Heart burn, present periodically.",
        "value": 3
      },
      {
        "text": "Heart burn, present permanently.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of any red (hematemesis) or black (coffee ground) vomitus:",
    "name": "UpperGIBleedSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No red (hematemesis) or black (coffee ground) vomitus.",
        "value": 2
      },
      {
        "text": "Red or black (coffee ground) vomitus is present.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of any red (hematochezia) or black (melena) stool:",
    "name": "LowerGIBleedSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No history of red (hematochezia) or black (melena) stool. No blood on toilet tissue.",
        "value": 2
      },
      {
        "text": "No history of red (hematochezia) or black (melena) stool. Blood present on toilet tissue.",
        "value": 3
      },
      {
        "text": "History of red (hematochezia) stool is present.",
        "value": 4
      },
      {
        "text": "History of black (melena) stool is present.",
        "value": 5
      },
      {
        "text": "History of red (hematochezia) and black (melena) stool is present.",
        "value": 6
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Count of loose stools (in acute diarrhea):",
    "name": "AcuteDiarrheaSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No diarrhea.",
        "value": 2
      },
      {
        "text": "Diarrhea, up to 3 loose stools  in any 24 hours on average from the beginning of symptoms.",
        "value": 3
      },
      {
        "text": "Diarrhea, at least 4 loose stools, but not more than 10 loose stools, in any 24 hours on average from the beginning of symptoms.",
        "value": 4
      },
      {
        "text": "Diarrhea, at least 10 loose stools or more in any 24 hours from the beginning of symptoms.",
        "value": 5
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of chronic loose stools (in chronic, longer than 4 weeks, diarrhea):",
    "name": "ChronicDiarrheaSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No chronic diarrhea.",
        "value": 2
      },
      {
        "text": "Chronic diarrhea present.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of constipation:",
    "name": "Constipation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No constipation.",
        "value": 2
      },
      {
        "text": "Constipation (subjective) present.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Most recent stool?",
    "name": "Stool",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Within the last 48 hours.",
        "value": 2
      },
      {
        "text": "48 to 72 hours ago.",
        "value": 3
      },
      {
        "text": "More than 72 hoursa ago.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of vague and not localized abdominal discomfort (not pain), sometimes described as generalized fullness, distention or pressure:",
    "name": "VagueAbdSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of flatulence:",
    "name": "FlatulenceAbdSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Severity of the abdominal pain:",
    "name": "StomachPainSeveritySx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No stomach (abdominal) pain at all.",
        "value": 2
      },
      {
        "text": "The maximal abdominal pain severity has been up to 4 out of 10.",
        "value": 3
      },
      {
        "text": "The maximal abdominal pain severity has been more than 4 but not more than 7 out of 10.",
        "value": 4
      },
      {
        "text": "The maximal abdominal pain severity has been at least 8 out of 10.",
        "value": 5
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Abdominal pain distribution:",
    "name": "StomachPainDistributionSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No abdominal pain at all, or it is limited to one place (i.e. umbilicus), or area (i.e. periumbilical area), or limited to 1 quadrant (i.e. left lower quadrant).",
        "value": 2
      },
      {
        "text": "The pain is affecting at least 2, but less than 4  places, or areas, or abdominal quadrants.",
        "value": 3
      },
      {
        "text": "The pain is affecting all 4 different quadrants.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "If there is abdominal pain, besides when after pain medicines, does the abdominal pain go away by itself (i.e. when patient is in a specific position, or after vomiting, or bowel movement) for at least some short time ? :",
    "name": "StomachPainResolvesPRDXSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no abdominal pain at all, or of it is, it goes away completely periodically.",
        "value": 2
      },
      {
        "text": "No, but it decreases to minimal severity periodically, however it doesn't go away completely.",
        "value": 3
      },
      {
        "text": "No, the abdominal pain doesn't decrease or decreases only minimally.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Is there a history of pain in anal area ?",
    "name": "PeriAnalPainSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but very rarely, it continues for few days, and after that it goes away for days to even weeks. ",
        "value": 4
      },
      {
        "text": "Yes, it continues for weeks, it goes away periodically for days to weeks. ",
        "value": 6
      },
      {
        "text": "Yes, and it is constant, possibly going away only after pain medications.",
        "value": 7
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Stool incontinence or underwear stool soiling:",
    "name": "PeriAnalSoilingSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Abdominal pain progression, since patient started having this kind of pains in his/her life",
    "name": "StomachPainProgressionSubjective",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No progression / or no abdominal pain at all.",
        "value": 11
      },
      {
        "text": "Over minutes.",
        "value": 2
      },
      {
        "text": "Over hours.",
        "value": 4
      },
      {
        "text": "Over days.",
        "value": 6
      },
      {
        "text": "Over weeks.",
        "value": 7
      },
      {
        "text": "Over months or longer period of time.",
        "value": 9
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Duration of this specific current pain episode, since last patient had no pain.",
    "name": "StomachPainDuration",
    "type": "categorical",
    "default": 11,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No progression / or no abdominal pain at all.",
        "value": 11
      },
      {
        "text": "Over minutes.",
        "value": 2
      },
      {
        "text": "Over hours.",
        "value": 4
      },
      {
        "text": "Over days.",
        "value": 6
      },
      {
        "text": "Over weeks.",
        "value": 7
      },
      {
        "text": "Over months or longer period of time.",
        "value": 9
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of pain in the right upper quadrant ?",
    "name": "RUQPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the left upper quadrant ?",
    "name": "LUQPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the right lower quadrant ?",
    "name": "RLQPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the left lower quadrant ?",
    "name": "LLQPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the right or left flank ?",
    "name": "RLFlankPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the periumbilical area ?",
    "name": "StomachPainPeriumbilicalArea",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of abdominal pain in the epigastric area - midline ?",
    "name": "StomachPainEpigastricArea",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain in the right or left inguinal area ?",
    "name": "RLInguinalPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but present only intermittently, when walking or exercise. ",
        "value": 3
      },
      {
        "text": "Yes. Present constantly for at least couple hours, but minimal only.",
        "value": 4
      },
      {
        "text": "Yes. Present constantly for at least couple hours, and moderate or severe.",
        "value": 5
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain below the umbilicus / lower abdomen or pelvic pain?",
    "name": "BellowTheUmbAbdPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Does the abdominal pain have the tendency to recur around the same time of the period cycle, (i.e. always 1 to 3 days before menstruation) ?",
    "name": "StomachPainPeriod",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Does the abdominal pain have the tendency to recur around immediately before or during the menstruation ?",
    "name": "StomachPainInPeriod",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Is abdominal pain radiating to the back ?",
    "name": "AbdPainRadBack",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Is abdominal pain relieving or decreasing when patient is leaning forward ?",
    "name": "AbdPainImprovesLeaning",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Is abdominal pain radiating to the perineum ?",
    "name": "AbdPainRadPerineum",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Fasting is aggravating, triggering or increasing the abdominal pain or discomfort?",
    "name": "FastingPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Alcohol is aggravating, could have been a trigger (even remote - if patient had it couple of days ago) or increased the abdominal pain?",
    "name": "EtohAbdPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Food or meals (any or especially fatty meals) are aggravating, triggering or increasing the abdominal pain or discomfort?",
    "name": "EatingPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      },
      {
        "text": "Yes. Especially fatty meals are inreasing or triggering the abdominal pain.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Lying down is aggravating, triggering or increasing the abdominal pain?",
    "name": "LayingdownPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Straining or cough is aggravating, triggering or increasing the abdominal pain?",
    "name": "StrainingPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Has food intake significantly decreased?",
    "name": "FoodIntake",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Early satiety present?",
    "name": "EarlySatiety",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Has fluid intake significantly decreased?",
    "name": "FluidIntake",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Has patient been on diet deprived of electrolytes (i.e. drinking huge amount of coffee and eating biscuits only) ?",
    "name": "FluidNoLytesIntake",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of pain with swallowing?",
    "name": "SwallowPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of issues when swallowing solids?",
    "name": "SolidsSwallow",
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
        "text": "Yes, solids get stuck periodically.",
        "value": 3
      },
      {
        "text": "Yes, solids get stuck periodically and it is progressively worse.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of issues when swallowing fluids?",
    "name": "FluidsSwallow",
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
        "text": "Yes, fluids get stuck periodically.",
        "value": 3
      },
      {
        "text": "Yes, fluids get stuck periodically and it is progressively worse.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "History of aspiration (i.e. choking, cough immediately afterward)?",
    "name": "ChokingSwallow",
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
        "text": "Yes, there is a history of aspiration.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Regurgitation of food bolus during sleep.",
    "name": "RegurgFood",
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
    "category": "Gastrointestinal review of system"
  },
  {
    "text": "Urinary incontinence:",
    "name": "UrineSoilingSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Gastrointestinal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of discomfort, pain, or \"burning\" with urination (dysuria):",
    "name": "BurningWithUrination",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of overly frequent urination:",
    "name": "UrinaryFrequency",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Bloody urine (gross hematuria):",
    "name": "GrossHematuria",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is nocturia (night time urination) present ?",
    "name": "Nocturia",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Does the urination make the pain or pressure of lower abdomen (if present) less severe or it goes away for at least a short time after urination ?",
    "name": "UrinationRelieves",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is there a weak stream during urination?",
    "name": "WeakStream",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is there a need to strain to urinate ?",
    "name": "StrainStream",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Urinary urgency:",
    "name": "UrinaryUrgency",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Producing less (relatively to fluid intake) urine than usually:",
    "name": "LessUrine",
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
        "text": "Yes - though still urinating smaller amounts with close to normal frequency (Patient urinated within the couple of hours).",
        "value": 3
      },
      {
        "text": "Yes - and Patient has not been urinating for couple of hours (urinary retention).",
        "value": 4
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Polyuria (as large amounts of urine):",
    "name": "Polyuria",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Polydipsia:",
    "name": "Polydipsia",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Presence of urinary incontinence with increased intraabdominal pressure (laughing, coughing, sneezing) ?",
    "name": "StressIncoHx",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Subjective sensation of inability to empty bladder completely (immediately, or shortly after urination patient has a feeling of urination urge or bladder pressure, frequency):",
    "name": "NonEmptyBladder",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Presence of urinary incontinence preceded by urge to urinate, commonly patient describes this sequence as \"can't make it to the bathroom\" ?",
    "name": "UrgencyIncoHx",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "Presence of constant or close to constant leaking of drops or larger amounts of urine ?",
    "name": "ConstantIncoHx",
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
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of vaginal spotting or bleeding (in females):",
    "name": "FemaleSpottingSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No spotting.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of vaginal dryness?",
    "name": "FemaleVaginalDryness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No vaginal dryness.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of blood in semen (in males):",
    "name": "MaleSpottingSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No blood in semen.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of abnormal vaginal discharge (in females):",
    "name": "FemaleDCSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No abnormal vaginal discharge.",
        "value": 2
      },
      {
        "text": "Yes. Yellowish green or gray, profuse, malodorous copious.",
        "value": 3
      },
      {
        "text": "Yes. White, curdy, rather thick, not malodorous, not profuse.",
        "value": 4
      },
      {
        "text": "Yes. White, thin, malodorous (fishy), homogenous, not profuse.",
        "value": 5
      },
      {
        "text": "Yes. Otherwise described.",
        "value": 6
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of abnormal penile discharge (in males):",
    "name": "MaleDCSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No history of abnormal penile discharge.",
        "value": 2
      },
      {
        "text": "Yes. There is history of penile discharge.",
        "value": 3
      },
      {
        "text": "...",
        "value": 5
      }
    ],
    "category": "Genitourinary review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of vaginal soreness (in females):",
    "name": "VaginalSorenessSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is there a history of vaginal itching (in females)?",
    "name": "VaginalItching",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of urethral discharge:",
    "name": "PusMaleSpottingSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of scrotal / testicular pain (in males):",
    "name": "ScrotalPainSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No scrotal pain.",
        "value": 2
      },
      {
        "text": "Yes, but mild or minimal only scrotal pain present.",
        "value": 3
      },
      {
        "text": "Yes, and moderate or severe scrotal pain present.",
        "value": 4
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of menorrhagia (heavy periods)  - in females:",
    "name": "HeavyPeriodsSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "History of metrorrhagia (irregular periods)  - in females:",
    "name": "IrregularPeriodsSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Most recent period - in females:",
    "name": "LastPeriod",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Occured as it should.",
        "value": 2
      },
      {
        "text": "Missed one period (no period for the last 45 days).",
        "value": 3
      },
      {
        "text": "Missed at least 2 periods.",
        "value": 4
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Amenorrhea (in female).",
    "name": "Amenorrhea",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Pain during sex (dyspareunia) in females:",
    "name": "FemaleDyspaureniaSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Any history of pain during sex (if patient is a male)?",
    "name": "MaleDyspaureniaSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Perineal or prostate pain during ejaculation in males:",
    "name": "MaleProstatePainSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is there history of childbirth?",
    "name": "HxChildbirth",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No or male patient.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary review of system"
  },
  {
    "text": "Is there a history of a localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) over lower extremities:",
    "name": "LocalizedNeuroSensLEHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory deficit in lower extremities.",
        "value": 2
      },
      {
        "text": "There is a history of a localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) in lower extremities.",
        "value": 3
      },
      {
        "text": "There is a history of a localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) in lower extremities and there is history of associated rash or erythema in the same area.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is there any local neurological motor or sensory deficit.",
    "name": "AnyLocalNeuroFindings",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory or motor deficit.",
        "value": 2
      },
      {
        "text": "Yes, there is localized sensory or motor deficit.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is there a history of a localized sensory deficit, paresthesias or pain along skin dermatomes on trunk or face?",
    "name": "LocalizedSensoryDeficitHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      },
      {
        "text": "Yes, there is such a history and there is history of associated rash or erythema in the same area.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is there a history of a localized motor deficit of lower extremities:",
    "name": "LocalizedNeuroMotoLEHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized motor deficit in lower extremities.",
        "value": 2
      },
      {
        "text": "There is a history of a localized motor deficit in lower extremities.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is there a history of a localized sensory deficit, paresthesias or pain along skin dermatomes over upper extremities or neck:",
    "name": "LocalizedNeuroSensUEHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory deficit in upper extremities or neck.",
        "value": 2
      },
      {
        "text": "There is a history of a localized sensory deficit, paresthesias or pain along skin dermatomes in upper extremities or neck.",
        "value": 3
      },
      {
        "text": "There is a history of a localized sensory deficit, paresthesias or pain along skin dermatomes in upper extremities or neck and there is history of associated rash or erythema in the same area.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is there a history of a localized motor deficit of upper extremities or neck:",
    "name": "LocalizedNeuroMotoUEHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized motor deficit in upper extremities.",
        "value": 2
      },
      {
        "text": "There is a history of a localized motor deficit in upper extremities or neck.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "History of a generalized muscle weakness:",
    "name": "GeneralizedWeakness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Acute change in mental status present?",
    "name": "AMS",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "History of seizures:",
    "name": "Seizure",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No seizures.",
        "value": 2
      },
      {
        "text": "Yes, there is a history of seizures.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Aphasia (motor or sensory) by history:",
    "name": "AphasiaHx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No history aphasia.",
        "value": 2
      },
      {
        "text": "Yes, there is a history of aphasia.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Loss of consciousness or presyncopal event:",
    "name": "LossOfConsciousness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness.",
        "value": 2
      },
      {
        "text": "There is a history of recent presyncopal event, but no loss history of consciousness present.",
        "value": 3
      },
      {
        "text": "There is a history of recent history of loss of consciousness present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Loss of consciousness or presyncopal event prodromal symptoms:",
    "name": "LossOfConsciousnessProdrome",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness or presyncopal event.",
        "value": 2
      },
      {
        "text": "Prodromal symptoms absent. It just happend so abruptly.",
        "value": 3
      },
      {
        "text": "Prodromal symptoms present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Palpitations just before the loss of consciousness or before or during the presyncopal event:",
    "name": "LossOfConsciousnessProdromePalpitations",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness or presyncopal event.",
        "value": 2
      },
      {
        "text": "Palpitations absent.",
        "value": 3
      },
      {
        "text": "Palpitations present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Chest pain just before the loss of consciousness or before or during the presyncopal event:",
    "name": "LossOfConsciousnessProdromeChestPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness or presyncopal event.",
        "value": 2
      },
      {
        "text": "Chest pain absent.",
        "value": 3
      },
      {
        "text": "Chest pain present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Headache just before the loss of consciousness or before or during the presyncopal event:",
    "name": "LossOfConsciousnessHeadache",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness or presyncopal event.",
        "value": 2
      },
      {
        "text": "Headache absent.",
        "value": 3
      },
      {
        "text": "Mild headache present.",
        "value": 4
      },
      {
        "text": "Moderate or severe headache present.",
        "value": 5
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Seizures during the loss of consciousness:",
    "name": "LossOfConsciousnessSeizures",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness.",
        "value": 2
      },
      {
        "text": "Seizures absent.",
        "value": 3
      },
      {
        "text": "Seizures present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Loss of consciousness and / or loss of sphincter control:",
    "name": "LossOfConsciousnessSphincter",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness or loss of sphincter control.",
        "value": 2
      },
      {
        "text": "History of loss of consciousness, but control of sphincters not lost.",
        "value": 3
      },
      {
        "text": "History of loss of consciousness and control of sphincters lost.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Patient was drowsy or went to sleep after the episode of loss of consciousness:",
    "name": "LossOfConsciousnessPostictall",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent loss of consciousness.",
        "value": 2
      },
      {
        "text": "Postictal phase absent.",
        "value": 3
      },
      {
        "text": "Postictal phase present.",
        "value": 4
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Orthostatic lightheadedness:",
    "name": "OrthostaticLightheadedness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Not present.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Dizziness when changing head's position :",
    "name": "DizzinessWithPosition",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Dizziness with exertion:",
    "name": "DizzinessWithExertion",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Frontal headache:",
    "name": "HeadacheFrontal",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Is the onset of headache is extremely abrupt or \"thunderclap\" like ?",
    "name": "HeadacheThunderclap",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Temporal headache character:",
    "name": "HeadacheTemporal",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present on one side.",
        "value": 3
      },
      {
        "text": "Present on one side, same side as visual problems (if present).",
        "value": 4
      },
      {
        "text": "Present on both sides.",
        "value": 5
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Other (i.e. in the back of the head) headache:",
    "name": "HeadacheOther",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "This headache's episode maximal intensity:",
    "name": "HeadacheIntensity",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No headache.",
        "value": 2
      },
      {
        "text": "Minimal or mild headache.",
        "value": 3
      },
      {
        "text": "Moderate headache.",
        "value": 4
      },
      {
        "text": "Severe, but not the worst headache in patient's life.",
        "value": 5
      },
      {
        "text": "Severe, and the worst headache in patient's life.",
        "value": 6
      }
    ],
    "category": "Neurological review of system"
  },
  {
    "text": "Heat intolerance:",
    "name": "HeatIntolerance",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Endocrine review of system"
  },
  {
    "text": "Cold intolerance:",
    "name": "ColdIntolerance",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Endocrine review of system"
  },
  {
    "text": "Salt craving.",
    "name": "SaltCraving",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Endocrine review of system"
  },
  {
    "text": "History of currently felt low back pain?",
    "name": "LowbackPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      },
      {
        "text": "Yes, and the pain is radiating to the posterior (S1 dermatome) or lateral aspect (L5 dermatome) of one or both lower extremities.",
        "value": 4
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Current complain of stiff neck ?",
    "name": "NeckStiffn",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "What is the severity of the low back pain?",
    "name": "LowbackSeverity",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No low back pain.",
        "value": 2
      },
      {
        "text": "It is mild (up 3 out of 10 in severity).",
        "value": 3
      },
      {
        "text": "It is moderate (4 to 6 out of 10 in severity).",
        "value": 4
      },
      {
        "text": "It is severe (7 to 10 out of 10 in severity).",
        "value": 5
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Is low back pain resolving or improving with flexed spine position (patient may elect to be in flexed position)?",
    "name": "LowbackPainFlexion",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, it is not resolving or improving with flexion of the spine.",
        "value": 2
      },
      {
        "text": "Yes, it is resolving or improving with flexion of the spine. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Is Valsalva's (straining, sneezing, or coughing) triggering or making the low back pain worse?",
    "name": "LowbackPainTrig",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such low back pain.",
        "value": 2
      },
      {
        "text": "Yes, straining, sneezing, or coughing is triggering or making the low back pain worse. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Is low back pain resolving or improving during night / prolonged rest?",
    "name": "LowbackPainSleep",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, it is not resolving or improving at nights or after prolonged rest.",
        "value": 2
      },
      {
        "text": "Yes, it is resolving or improving at nights or after prolonged rest. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Is exercise improving or worsening the low back pain?",
    "name": "LowbackPainExercise",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Exercise doesn't affect the severity of the low back pain.",
        "value": 2
      },
      {
        "text": "After exercise low back pain worsens. ",
        "value": 3
      },
      {
        "text": "After exercise low back pain improves. ",
        "value": 4
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Localized bone or joint pain (other than low back pain), without obvious trigger i.e. trauma:",
    "name": "BoneLocPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "History of generalized bones' pains:",
    "name": "BoneGenPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "History of generalized muscles' (myalgia) pains:",
    "name": "MuscleGenPain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Localized spine pain:",
    "name": "SpinePain",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "History of resting pain in distal lower extremities', toes or feet:",
    "name": "RestingPainInLowerExtremities",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is a history of resting pain in feet or toes, in one lower extremity, with worsened pain, after feet have been dependent for some time, and relief in pain when feet are raised to the level of hips.",
        "value": 3
      },
      {
        "text": "...es, there is a history of pain in feet or toes, in one lower extremity, and the resting pain is constant, regardless of whether feet are dependent or raised.",
        "value": 4
      },
      {
        "text": "Yes, there is a history of resting pain in feet or toes, in both feet, with worsened pain, after feet have been dependent for some time, and relief when feet are raised to the level of hips.",
        "value": 5
      },
      {
        "text": "...es, there is a history of pain in feet or toes, in both feet, and the resting pain is constant, regardless of whether feet are dependent or raised.\t",
        "value": 6
      }
    ],
    "category": "Musculoskeletal review of system",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Height loss:",
    "name": "HeightDecreased",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, there is such history. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "History of recent trauma to the chest or T spine:",
    "name": "PMHXChestTrauma",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "History of recent head trauma:",
    "name": "PMHXHeadTrauma",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Musculoskeletal review of system"
  },
  {
    "text": "Is there a history of chronic obstructive pulmonary disease (COPD)?",
    "name": "PMHXCOPD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, patient has no history of chronic obstructive pulmonary disease (COPD).",
        "value": "2"
      },
      {
        "text": "Yes, patient has history of chronic obstructive pulmonary disease (COPD), but only mild, never was hospitalized for COPD exacerbation.",
        "value": 4
      },
      {
        "text": "Yes, patient has history of chronic obstructive pulmonary disease (COPD), and was hospitalized at least once for COPD exacerbation.",
        "value": 6
      },
      {
        "text": "Yes, patient has history of chronic obstructive pulmonary disease (COPD), and was intubated due to acute respiratory failure (ARF) at least once for COPD exacerbation.",
        "value": 7
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of asthma?",
    "name": "PMHXAsthma",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of asthma, but only mild, never was hospitalized for asthma exacerbation.",
        "value": 3
      },
      {
        "text": "Yes, patient has history of asthma, and was hospitalized at least once for asthma exacerbation.",
        "value": 4
      },
      {
        "text": "Yes, patient has history of asthma, and was intubated due to acute respiratory failure (ARF) at least once for asthma exacerbation.",
        "value": 5
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of atopic dermatitis?",
    "name": "PMHXAtopicDermatitis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of atopic dermatitis, only in early childhood.",
        "value": 3
      },
      {
        "text": "Yes, patient has history of atopic dermatitis.",
        "value": 4
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of recurrent bronchopulmonary infections :",
    "name": "PMHXBPInf",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of bronchopulmonary infections.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Risk factors for thrombosis:",
    "name": "PMHXRiskFxDVT",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such risk factors.",
        "value": 2
      },
      {
        "text": "Yes, risk factors present, i.e. recent trauma, hypercoagulable disorder, active cancer, imobilization, past unprovoked DVT or PE...",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there a history of congestive heart failure (CHF) - with low or preserved ejection fraction?",
    "name": "PMHXCHF",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of CHF.",
        "value": 3
      },
      {
        "text": "Yes, patient has history of CHF and pulmonary edema.",
        "value": 4
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of coronary artery disease (CAD)?",
    "name": "PMHXCAD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of CAD, but never had heart attack / myocardial infarction (MI).",
        "value": 3
      },
      {
        "text": "Yes, patient has history of CAD, and had heart attack / myocardial infarction (MI).",
        "value": 4
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of peripheral vascular disease (PVD)?",
    "name": "PMHXPVD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes there is history of peripheral vascular disease (PVD)",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of atrial fibrillation (or atrial flutter):",
    "name": "PMHXAFib",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there history of hypertension (HTN)?",
    "name": "PMHXHTN",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has had HTN for less than 10 years.",
        "value": 3
      },
      {
        "text": "Yes, patient has had HTN for 10-19 years.",
        "value": 4
      },
      {
        "text": "Yes, patient has had HTN for 20 or more years.",
        "value": "5"
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is blood pressure above goal despite concurrent use of three antihypertensive agents of different classes, and one of these agents being diuretic (resistant hypertension).",
    "name": "ResistantHypertension",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is the onset of hypertension before puberty, or before the age of 30 years,  with no family history of hypertension and no obesity, or there is acute rise in blood pressure?",
    "name": "EarlyOnsetOfHypertension",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is the onset of hypertension abrupt (within weeks to months ) rise in blood pressure?",
    "name": "AbruptOnsetOfHypertension",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is the onset of hypertension after age 55 years with measurements >160/100 mmHg?",
    "name": "LateOnsetOfHypertension",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of diabetes mellitus type 1?",
    "name": "PMHXDM1",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has had diabetes mellitus type 1 for less than 10 years.",
        "value": 3
      },
      {
        "text": "Yes, patient has had diabetes mellitus type 1 for 10 or more years.",
        "value": "4"
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of diabetes mellitus type 2 (DM2)?",
    "name": "PMHXDM2",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has had diabetes mellitus type 2 for less than 10 years.",
        "value": 3
      },
      {
        "text": "Yes, patient has had diabetes mellitus type 2 for 10 or more years.",
        "value": "4"
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of poorly controlled diabetes mellitus (type 1 or type 2):",
    "name": "PMHXPCDM",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of renal colic or kidney stones:",
    "name": "PMHXKidneyStone",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of peptic ulcer disease:",
    "name": "PMHXPUD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of sexually transmitted diseases (excluding HIV):",
    "name": "PMHXVeneral",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of hypothyroidism on thyroxine supplementation currently:",
    "name": "PMHXHypo",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history, but is appropriately monitoring TSH (at least every 3 months if dose of thyroxine changed, or at least yearly if no adjustment to levothyroxine dose done).",
        "value": 3
      },
      {
        "text": "Yes, patient has such history, and is not appropriately monitoring TSH.",
        "value": 4
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there a history of chronic kidney disease (CKD)?",
    "name": "PMHXCKD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of benign prostatic hypertrophy (BPH)?",
    "name": "PMHXBPH",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of abdominal or pelvic surgery:",
    "name": "PMHXAbdSx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of appendectomy.",
        "value": 3
      },
      {
        "text": "Yes, patient has history other pelvic or abdominal surgery.",
        "value": 4
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there a history of ovarian cysts?",
    "name": "PMHXOvarianC",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of Chron's disease?",
    "name": "PMHXChrons",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of colitis ulcerosa (ulcerative colitis)?",
    "name": "PMHXCU",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a personal history of adenomatous polyp?",
    "name": "PMHXColonPolyp",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a personal history of atypical ductal or lobular hyperplasia or lobular carcinoma on prior breast biopsy (pick the most advanced finding, and if equal type, the most prevalent)?",
    "name": "PMHXAtypicalDuctalorLobularHyperplasiaOrLobularCarcinomaOnPriorBreastBiopsy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is history of atypical ductal hyperplasia on prior breast biopsy.",
        "value": 3
      },
      {
        "text": "Yes, there is history of atypical lobular hyperplasia on prior breast biopsy.",
        "value": 4
      },
      {
        "text": "Yes, there is history of lobular carcinoma on prior breast biopsy.",
        "value": 5
      },
      {
        "text": "...",
        "value": 6
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is the patient positive for BRCA 1 or 2 gene (breast and ovarian cancer genes)",
    "name": "PMHXBRCA12positivity",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What was the age at menarche?",
    "name": "AgeAtMenarche",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "12 or more years old.",
        "value": 2
      },
      {
        "text": "Below 12 years old.",
        "value": 3
      },
      {
        "text": "...",
        "value": 4
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "If already had menopause, what was the age at the menopause?",
    "name": "AgeAtMenopause",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Below 55 years years old.",
        "value": 2
      },
      {
        "text": "When 55 years old or older.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "If already had a birth, what was the age at the 1st birth?",
    "name": "AgeAtFirstBirth",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "At age of 30 years old or earlier.",
        "value": 2
      },
      {
        "text": "When older than 30 years old.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of recent viral or unknown gastroenteritis:",
    "name": "PMHXGE",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Does the patient has history of liver cirrhosis or ascites?",
    "name": "PMHXLiverCirrhosis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has history of ascites, but no history of liver cirrhosis",
        "value": 3
      },
      {
        "text": "Yes, patient has history of liver cirrhosis, but without ascites.",
        "value": 4
      },
      {
        "text": "Yes, patient has history of liver cirrhosis, with ascites.",
        "value": 5
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of esophageal varices or other symptoms of portal hypertension:",
    "name": "PMHXVarices",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of peritonitis:",
    "name": "PMHXPeritionitis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of gall stones:",
    "name": "PMHXVGallStones",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of diverticulosis or diverticulitis",
    "name": "PMHXDiverticulosisDiverticulitis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of depression:",
    "name": "PMHXDepression",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      },
      {
        "text": "Yes, patient has such history, and there is additionally history of suicidal attempts.",
        "value": 4
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of substance abuse:",
    "name": "PMHXSubstanceAbuse",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of psychiatric issues, other than depression:",
    "name": "PMHXPsychOtherThanDepresion",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there a history of aspiration?",
    "name": "PMHXAspiration",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there recent history of recent pneumonia?",
    "name": "PMHXPneumonia",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of recent common respiratory infection (i.e. common cold):",
    "name": "PMHXURTI",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is there history of recent hospital stay within the previous couple of weeks?",
    "name": "PMHXHospital",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of tonsillectomy:",
    "name": "PMHXTonsillectomy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "History of recent dental procedure",
    "name": "PMHXDentalWork",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such a history.",
        "value": 2
      },
      {
        "text": "Yes, patient has such history.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "text": "Is patient immunodeficient (i.e., uncontrolled AIDS, recently administered chemotherapy or neutropenia)?",
    "name": "PMHXID",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of autoimmune disease.",
    "name": "PMHXAutoimmune",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Patient has history of malignant neoplastic disease:",
    "name": "PMHXMalNeo",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history"
  },
  {
    "name": "PMHXContact",
    "text": "Is there a history of recent contact with healthcare (hospital, hemodialysis, nursing home, wound care)?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Intravenous (IV) antibiotics therapy for wound care within last 30 days.",
        "value": 3
      },
      {
        "text": "Long term (i.e. nursing home) residency.",
        "value": "4"
      },
      {
        "text": "Hospitalization in acute care hospital within last 90 days.",
        "value": "5"
      },
      {
        "text": "Outpatient threrapy in a hospital or outpatient hemodialysis ",
        "value": "6"
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "PMHXWoundCurrent",
    "text": "Does patient have currently open wounds?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ]
  },
  {
    "name": "PMHXDialysisCurrent",
    "text": "Has patient attended any inpatient or outpatient hemodialysis clinic within the last 30 days?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "PMHXHepatitisC",
    "text": "Has patient ever been found to have hepatitis C?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "PMHXHepatitisB",
    "text": "Has patient ever been found to have hepatitis B?",
    "category": "Past medical history",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Past medical history of intracranial hemorrhage (ICH)?",
    "name": "PMHXICH",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Currently on anticoagulation?",
    "name": "Anticoag",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but is not effectively anticoagulated.",
        "value": 3
      },
      {
        "text": "Yes, and is anticoagulated effectively.",
        "value": 4
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Currently on hormonal replacement therapy?",
    "name": "CurrentUseOfHormonalReplacementTherapy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has patient been tried on bronchodilator therapy for dyspnea?",
    "name": "BronchoDilators",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "There is no dyspnea at all.",
        "value": 2
      },
      {
        "text": "No, not used recently.",
        "value": 3
      },
      {
        "text": "Yes, used recently or just now, but no improvement of dyspnea.",
        "value": 4
      },
      {
        "text": "Yes, used recently or just now, with improvement.",
        "value": 5
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Have diuretics therapy been tried for dyspnea?",
    "name": "Diuretics",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No, not used recently or there is no dyspnea at all.",
        "value": 2
      },
      {
        "text": "Yes, used recently or just now, but no improvement of dyspnea.",
        "value": 3
      },
      {
        "text": "Yes, used recently or just now, with improvement.",
        "value": 4
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of severely negative fluid balanace (for example due to heavy use of diuretics)?",
    "name": "DiureticsOvert",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is patient allergic to iodine-containing IV dye ?",
    "name": "AllergicToDye",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "WoundCareRecent",
    "text": "Has patient received any wound care within last 30 days ?",
    "category": "Medications/Therapy/Allergies",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ]
  },
  {
    "text": "Has patient been using any oral antibiotics recently ?",
    "name": "PoAbxMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, within last 30 days.",
        "value": 3
      },
      {
        "text": "Yes, within last 31-90 days.",
        "value": "4"
      },
      {
        "text": "Yes, more than 90 days ago.",
        "value": "5"
      },
      {
        "text": "...",
        "value": -1
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to opiates, i.e. heroin, morphine, codeine, hydrocodone, oxycodone, hydromorphone, buprenorphine, fentanyl, methadone?",
    "name": "OpiatesMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "name": "IVAbxMed",
    "text": "Has patient been using any IV (intravenous) antibiotics wihtin last 30?",
    "category": "Medications/Therapy/Allergies",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, within 30 days",
        "value": 3
      },
      {
        "text": "...",
        "value": 4
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has been using ACE-I (angiotensin converting enzyme inhibitors) or ARBs (angiotensin II receptor blockers) ?",
    "name": "ACEARB",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has using ACE-I (angiotensin converting enzyme inhibitor), ARB (angiotensin II receptor blocker), MRA (mineralocorticoid receptor antagonist i.e. spironolactone) or other RAAS (renin-angiotensin-aldosterone system) inhibitors cause out of proportion rise in creatine?",
    "name": "ACEARBUseCausedAzotemia",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Has been using NSAIDS recently  ?",
    "name": "NSAIDSMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Has been exposed to iodine contrast recently  ?",
    "name": "ContrastIodine",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to tricyclic antidepressants (TCAs) i.e. Amitriptyline, Clomipramine, Desipramine, Doxepin ?",
    "name": "TCAMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to anticholinergic medicines - i.e. Atropine, Diphenhydramine, Hydroxyzine, Tolterodine, Bupropion, Spiriva, Doxepin ?",
    "name": "AntiCholinergicMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to serotoninergic medicines or herbs - i.e. Tramadol, Sumatriptan, Fluoxetine, Citalopram, Paroxetine, Venlafaxine, Duloxetine, Rizatriptan, Imipramine, St. John's wort, Linezolid ?",
    "name": "SerotoninergicMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to benzodiazepines ?",
    "name": "BZDMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have been using or had access to lithium ?",
    "name": "LithiumMed",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Is patient vaccinated with this season's influenza vaccine?",
    "name": "ThisSeasonsFluVaccineGiven",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Medications/Therapy/Allergies",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Have used new medicine or medicine with known history of allergy to it ?",
    "name": "AllergyMeds",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "text": "Have patient used any medicines that can cause neutropenia besides chemotherapeutics (i.e. sulfasalazine, clozapine, methimazole, propylthiouracil, NSAIDs, cocaine or heroin with the addition of levamisole, acetazolamide, procainamide, flecainide, ticlopidine, enalapril, captopril, propranolol, bactrim, macrolides, vancomycin, cephalosporins, carbamazepine, phenytoin, thiazides, furosemide, or spironolactone) ?",
    "name": "NeutropeniaMeds",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Medications/Therapy/Allergies"
  },
  {
    "name": "MedsRecentChemotherapy",
    "text": "Has any recent chemotherapy been administered (within last 30 days) ?",
    "category": "Medications/Therapy/Allergies",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ]
  },
  {
    "text": "Does the patient has a history of therapeutic chest radiation before the age of 30?",
    "name": "HistoryOfChestRadiation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Past medical history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of COPD in 1st degree relatives:",
    "name": "FHCOPD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No COPD history in 1st degree relatives.",
        "value": 2
      },
      {
        "text": "COPD present in 1st degree relatives.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "How many people of 1st degree relatives have asthma:",
    "name": "FHAsthma",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "0",
        "value": 2
      },
      {
        "text": "1",
        "value": 3
      },
      {
        "text": "2 or more",
        "value": 4
      }
    ],
    "category": "Family history"
  },
  {
    "text": "How many people of 1st degree relatives have or had atopic dermatitis?",
    "name": "FHAtopicDermatitis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "0",
        "value": 2
      },
      {
        "text": "1",
        "value": 3
      },
      {
        "text": "2 or more",
        "value": 4
      }
    ],
    "category": "Family history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of Coronary Artery Diseases (CAD) in 1st degree relatives, who were diagnosed when they were younger than 60:",
    "name": "FHCAD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No one.",
        "value": 2
      },
      {
        "text": "CAD diagnosed in at least one 1st degree relatives, who was younger than 60.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "History of hypertension in 1st or 2nd degree relatives?",
    "name": "FHHTN",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such history.",
        "value": 2
      },
      {
        "text": "Yes, there is such family history.",
        "value": 3
      }
    ],
    "category": "Family history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of diabetes mellitus in first-degree relative:",
    "name": "FHDM",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Family history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of blood clots (SVT/DVT/PE) in 1st degree relatives:",
    "name": "FHDVTPEParent",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No such history.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history. But those were provoked DVTs/SVTs/PEs",
        "value": 3
      },
      {
        "text": "Yes, there is such a history. And those cases were unprovoked DVTs/SVTs/PEs",
        "value": 4
      }
    ],
    "category": "Family history"
  },
  {
    "text": "History of Chron's disease in a 1st or 2nd degree relative:",
    "name": "FHIBDCD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "History of colitis ulcerosa in a 1st or 2nd degree relative:",
    "name": "FHIBDCU",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "Family history of multiple endocrine neoplasia type 2 (MEN-2):",
    "name": "FHMEN2",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "Family history of prostate cancer:",
    "name": "FHProstateCa",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history - one first degree relative had prostate cancer.",
        "value": 3
      },
      {
        "text": "Yes, there is such a history - two first degree relatives had prostate cancer.",
        "value": 4
      }
    ],
    "category": "Family history"
  },
  {
    "text": "Any family history of breast or ovarian cancer ?",
    "name": "FHBreastCancer",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "The patient is of Ashkenazi Jewish descent and has 1 first-degree relative with breast or ovarian cancer.",
        "value": 3
      },
      {
        "text": "The patient is of Ashkenazi Jewish descent and has 2 second-degree (on the same side of family) relatives with breast or ovarian cancer.",
        "value": 4
      },
      {
        "text": "The patient is of other than Ashkenazi Jewish descent, and has 2 first-degree relatives with breast cancer, and at least one of them was diagnosed  before the age of 50.",
        "value": 5
      },
      {
        "text": "The patient is of other than Ashkenazi Jewish descent, and has 3 first- or second-degree relatives with breast cancer.",
        "value": 6
      },
      {
        "text": "The patient is of other than Ashkenazi Jewish descent, and has both overian and breast cancer among first- or second-degree relatives.",
        "value": 7
      },
      {
        "text": "The patient is of other than Ashkenazi Jewish descent, and has first-degree leative with bilateral breast cancer.",
        "value": 8
      },
      {
        "text": "The patient is of other than Ashkenazi Jewish descent, and has 2 or more first- or second-degree relatives with ovarian cancer.",
        "value": 9
      },
      {
        "text": "...",
        "value": 10
      }
    ],
    "category": "Family history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Family history of von Hippel-Lindau (VHL):",
    "name": "FHVHL",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "Family history of neurofibromatosis type 1 (NF-1):",
    "name": "FHNF1",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is such a history.",
        "value": 3
      }
    ],
    "category": "Family history"
  },
  {
    "text": "History of early (diagnosed before the age of 60 years old) colon cancer, or condition predisposing to colon cancer (i.e. Familial adenomatous polyposis - FAP, or adenomatous polyp) in a 1st degree relative:",
    "name": "FHEarlyCC",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, there is one first-degree relative with colon cancer, who is older than 50 years old.",
        "value": 3
      },
      {
        "text": "Yes, there is two first-degree relatives with colon cancer.",
        "value": 4
      },
      {
        "text": "Yes, there is one first-degree relative with colon cancer, who is 50 or less years old.",
        "value": 5
      },
      {
        "text": "Yes, there is one second-degree or third-degree relative with colon cancer.",
        "value": 6
      },
      {
        "text": "Yes, there is two second-degree relatives with colon cancer.",
        "value": 7
      }
    ],
    "category": "Family history"
  },
  {
    "text": "Is there a history of smoking ?",
    "name": "Smoker",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No history of clinically significan smoking.",
        "value": 2
      },
      {
        "text": "Has history of less than 15-pack-years of smoking.",
        "value": 3
      },
      {
        "text": "Has history of  15 or more pack-years of smoking.",
        "value": 4
      }
    ],
    "category": "Social history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there history of alcohol (ETOH) abuse?",
    "name": "ETOH",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No significant history of current or past abuse.",
        "value": 2
      },
      {
        "text": "Significant history of abuse in the past, but no current significant use of alcohol.",
        "value": 3
      },
      {
        "text": "Significant history of use currently (up to 2 drinks a day).",
        "value": 4
      },
      {
        "text": "Significant history of abuse currently (more than 2 drinks a day).",
        "value": 5
      }
    ],
    "category": "Social history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is ther a history of recent IV drugs or other illegal substances abuse?",
    "name": "RecentIVDrugs",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No recent history of drugs abuse.",
        "value": 2
      },
      {
        "text": "Yes, there is a history of drug abuse currently.",
        "value": 3
      }
    ],
    "category": "Social history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "History of dust or toxic inhalants exposure:",
    "name": "DustExposure",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No significant history of dust or inhalants exposure.",
        "value": 2
      },
      {
        "text": "Significant history of dust or inhalants exposure. (i.e. coal miner).",
        "value": 3
      }
    ],
    "category": "Social history"
  },
  {
    "text": "History of tuberculosis exposure (i.e. in prison, homeless):",
    "name": "TBExposure",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Social history"
  },
  {
    "text": "Is there a history of risky sexual behaviors (i.e., frequent, unprotected sex with various partners)?",
    "name": "SexExposure",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Social history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a history of exposure to Covid-19 / SARS-CoV-2 ?",
    "name": "ExposureToCovid",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No history of exposure.",
        "value": 2
      },
      {
        "text": "There is possible history of exposure to COVID-19 (SARS-CoV-2) within 14 days",
        "value": 3
      },
      {
        "text": "Yes, there is history of close, prolonged contact with COVID-19 (SARS-CoV-2) positive person within recent 14 days, without the use of protective equipment",
        "value": 4
      },
      {
        "text": "Yes, there is history of close, prolonged contact with COVID-19 (SARS-CoV-2) positive person within recent 14 days, without the use of protective equipment",
        "value": 5
      }
    ],
    "category": "Social history",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What is patient's gender?",
    "name": "Gender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Male.",
        "value": 2
      },
      {
        "text": "Female.",
        "value": 3
      }
    ],
    "category": "Constitutional and vital signs physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Patient's race:",
    "name": "Race",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Caucasian",
        "value": 2
      },
      {
        "text": "African American",
        "value": 3
      },
      {
        "text": "Other",
        "value": 4
      }
    ],
    "category": "Constitutional and vital signs physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Anisocoria (unequal pupils):",
    "name": "Anisocoria",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but the difference in diameter is not more than 0.4 mm.",
        "value": 3
      },
      {
        "text": "Yes, and the difference in diameter is more than 0.4 mm, however it is not new to this patient.",
        "value": 4
      },
      {
        "text": "Yes, and the difference in diameter is more than 0.4 mm, newly developed, and to this patient.",
        "value": 5
      }
    ],
    "category": "Eyes physical examination"
  },
  {
    "text": "Pupils:",
    "name": "Pupils",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Normal.",
        "value": 2
      },
      {
        "text": "Abnormal, pupils are dilated (\"mydriasis\"), symmetric.",
        "value": 3
      },
      {
        "text": "Abnormal, pinpoint pupils (\"miosis\"), symmetric.",
        "value": 4
      },
      {
        "text": "Abnormal, asymmetric reaction (one reacts one don't, or they both do react but grossly differently).",
        "value": 5
      }
    ],
    "category": "Eyes physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "What findings are revealed on examination of conjunctiva?",
    "name": "Conjunctivas",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Conjunctiva is normal.",
        "value": 2
      },
      {
        "text": "Erythema is present, in sector-like distribution.",
        "value": 3
      },
      {
        "text": "Erythema is present, in generalized (circular) distribution.",
        "value": 4
      },
      {
        "text": "Conjunctivas are pale.",
        "value": 5
      }
    ],
    "category": "Eyes physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there exophtalmos present ?",
    "name": "Exophtalmos",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Unilateral with lid lag.",
        "value": 3
      },
      {
        "text": "Yes. Bilateral with lid lag.",
        "value": 4
      },
      {
        "text": "Yes. Bilateral without lid lag.",
        "value": 5
      },
      {
        "text": "Yes. Unilateral without lid lag.",
        "value": 6
      }
    ],
    "category": "Eyes physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Visual acuity:",
    "name": "Acuity",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Normal, or chronically stable.",
        "value": 2
      },
      {
        "text": "Acutely abnormal, affecting one eye.",
        "value": 3
      },
      {
        "text": "Acutely abnormal, affecting both eyes.",
        "value": 4
      }
    ],
    "category": "Eyes physical examination"
  },
  {
    "text": "Blindness:",
    "name": "Blindness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, affecting one eye.",
        "value": 3
      },
      {
        "text": "Yes, affecting both eyes.",
        "value": 4
      }
    ],
    "category": "Eyes physical examination"
  },
  {
    "text": "Nasal congestion present?",
    "name": "NoseCongestion",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "At least one paranasal sinus tender on percussion:",
    "name": "SinusesTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Throat:",
    "name": "ThroatExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Normal tonsils or no tonsils seen.",
        "value": 2
      },
      {
        "text": "Tonsils edematous without exudate. ",
        "value": 3
      },
      {
        "text": "Tonsils not edematous, but with exudate. ",
        "value": 4
      },
      {
        "text": "Tonsils edematous, and with exudate. ",
        "value": 5
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Dental hygiene:",
    "name": "DentalHygiene",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "Normal.",
        "value": 2
      },
      {
        "text": "Poor. ",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Serous fluid behind tympanic membrane on otoscopic exam:",
    "name": "OtoscopicSerous",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Pus behind the tympanic membrane or tympanic membrane ruptured (possibly with pus in the meatus and middle ear seen) on otoscopy exam:",
    "name": "OtoscopicPus",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Gross discharge (or on otoscopy) seen from ear:",
    "name": "DischargeFromEar",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "During otoscopy external auditory meatus is tender:",
    "name": "MeatusTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Erythematous tympanic membrane on otoscopic exam:",
    "name": "OtoscopicErythema",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Outward bulging of the tympanic membrane on otoscopic exam:",
    "name": "OtoscopicBulding",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "ENT physical examination"
  },
  {
    "text": "Is the neck stiff (not supple)?",
    "name": "NeckStiffness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neck physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Swelling of the neck:",
    "name": "NeckSwollen",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, unilateral.",
        "value": 3
      },
      {
        "text": "Yes, bilateral.",
        "value": 4
      }
    ],
    "category": "Neck physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Thyroid gland enlarged:",
    "name": "ThyroidEnlarged",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neck physical examination"
  },
  {
    "text": "Bruit heard when thyroid gland is auscultated:",
    "name": "ThyroidBruit",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neck physical examination"
  },
  {
    "text": "Thyroid irregularities or nodules palpated:",
    "name": "ThyroidNodules",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neck physical examination"
  },
  {
    "text": "Anterior cervical lymph nodes:",
    "name": "AnteriorCervicalNodesExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Not enlarged, not tender.",
        "value": 2
      },
      {
        "text": "Not enlarged, tender or unable to assess (i.e. patient unresponsive).",
        "value": 4
      },
      {
        "text": "Enlarged (>1cm), not tender.",
        "value": 6
      },
      {
        "text": "Enlarged (>1cm), tender or unable to assess (i.e. patient unresponsive).",
        "value": 8
      }
    ],
    "category": "Neck physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Crackles/rales on inspiration:",
    "name": "Rales",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Unilateral or grossly asymmetric rales.",
        "value": 3
      },
      {
        "text": "Yes. Fine, bibasilar only rales.",
        "value": 4
      },
      {
        "text": "Yes. Bilateral rales.",
        "value": 5
      },
      {
        "text": "...",
        "value": 6
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "auscultation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "lungs'"
  },
  {
    "text": "Rhonchi:",
    "name": "Rhonchi",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Assymetric (mostly on one side).",
        "value": 3
      },
      {
        "text": "Yes. On both sides.",
        "value": 4
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "auscultation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "lungs'"
  },
  {
    "text": "Wheezing on expiration:",
    "name": "Wheezing",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Unilateral wheezing.",
        "value": 3
      },
      {
        "text": "Yes. Bilateral wheezing.",
        "value": 4
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "auscultation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "lungs'"
  },
  {
    "text": "Decreased breath sounds:",
    "name": "DecreasedBreathSounds",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. On one or asymmetrically present on both sides, to any height of the lung.",
        "value": 3
      },
      {
        "text": "Yes. Symmetric on both sides.",
        "value": 4
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "auscultation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "lungs'"
  },
  {
    "text": "Using accessory respiratory muscles?",
    "name": "AccessoryMuscles",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "observation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "text": "Prolonged expiratory phase?",
    "name": "ProlongedExpPhase",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Respiratory physical examination",
    "subcategory1": "observation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "text": "Regular rhythm:",
    "name": "RhythmRegular",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Yes.",
        "value": 2
      },
      {
        "text": "No. The rhythm is not regular, with only minor irregularities, pulse deficit is absent.",
        "value": 3
      },
      {
        "text": "No. The rhythm is irregularly irregular, pulse deficit is present.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "auscultation",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "heart"
  },
  {
    "text": "Jugular venous pressure (appreciated at patient lying supine with head of the bed 30 degrees elevation):",
    "name": "JVD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Normal.",
        "value": 2
      },
      {
        "text": "Elevated above the 8cm.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is patient preferring to sit up, as breathing is easier?",
    "name": "OrthopneaExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No. Position doesn't matter.",
        "value": 2
      },
      {
        "text": "Yes. Prefers to sit up (orthopnea by exam).",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is holosystolic or early systolic (possibly decrescendo) murmur present and heard at the apex (patient should be in left lateral decubitus position to best appreciate this murmur) ?",
    "name": "EarlySystolicHolosystolicMurmurAtApexMR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is holosystolic or early systolic (possibly decrescendo) murmur from apex - if present - radiating to either left axilla or neck?",
    "name": "EarlySystolicHolosystolicMurmurAtApexRadiationMR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is there holosystolic or early systolic (possibly decrescendo) murmur present at 2nd or 3rd left intercostal space at the left sternal border (can be slightly shifted towards the apex) ?",
    "name": "EarlySystolicHolosystolicMurmurLeftSternalBorderTR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Does the holosystolic or early systolic (possibly decrescendo) murmur present at the 2nd or 3rd left intercostal space - if present - increases after inspiration and one or two cardiac beats (Carvallo's sign) ?",
    "name": "EarlySystolicHolosystolicMurmurLeftSternalBorderRadiationTR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is holosystolic or early systolic murmur present (with the palpable thrill or not) at the left lower sternal border?",
    "name": "EarlySystolicHolosystolicMurmurAtTheLeftLowerSternalBorderVSD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is holosystolic or early systolic murmur present (with the palpable thrill or not) at the left lower sternal border - if present - radiating to the right lower sternal border?",
    "name": "EarlySystolicHolosystolicMurmurAtTheLeftLowerSternalRadiationVSD",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is midsystolic ejection murmur (with the palpable thrill or not) heard at the right 2nd intercostal space at the right sternal border ?",
    "name": "MidSystolicEjectionMurmurAtTheRightSternalBorderAS",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is midsystolic ejection murmur (with the palpable thrill or not) heard at the right 2nd intercostal space at the right sternal border - if present - radiating to the neck and bilaterally to carotid arteries ?",
    "name": "MidSystolicEjectionMurmurAtTheRightSternalBorderRadiationAS",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is early diastolic murmur heard at the right 2nd intercostal space or at the left sternal border (patient should be sitting up leaning forward to best appreciate this murmur) ?",
    "name": "EarlyDiastolicMurmurAR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is early diastolic murmur heard at the right 2nd intercostal space or at the left sternal border - if present - radiating to the apex ?",
    "name": "EarlyDiastolicMurmurRadiationAR",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Is murmur heard at the left 2nd interspace during systole and diastole continuously (can be radiating to left clavicle) and sometimes with an accompanying thrill  ?",
    "name": "PDAM",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Pericardial friction heard ?",
    "name": "PericardialFriction",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Right heart S3 gallop present:",
    "name": "RS3Tone",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Right heart S4 gallop present:",
    "name": "RS4Tone",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Left heart S3 gallop present:",
    "name": "LS3Tone",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Left heart S4 gallop present:",
    "name": "LS4Tone",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Edema on lower extremities/dependent body areas.",
    "name": "Edema",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No edema.",
        "value": 2
      },
      {
        "text": "Yes. On one side only (i.e. on right lower extremity only).",
        "value": 3
      },
      {
        "text": "Yes. On both sides. (i.e. both lower extremities).",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Asymmetric edema on lower extremities.",
    "name": "AsymmetricEdemaLE",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. The edema affects only one side or is asymmetric.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Tenderness along veins on lower extremities.",
    "name": "TenderLE",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No tenderness along veins in lower extremities.",
        "value": 2
      },
      {
        "text": "Yes. There is tenderness along veins on any or both of extremities or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Other signs associated with vein thrombosis? (redness, warmness, and engorged superficial veins)",
    "name": "DVTSg",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. ",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Pedal pulses on lower extremities.",
    "name": "DistalPulsesLE",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Present.",
        "value": 2
      },
      {
        "text": "Absent, on one lower extremity.",
        "value": 3
      },
      {
        "text": "Absent, on both lower extremities.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Cold or cool lower extremities' tips:",
    "name": "ColdLowerLimbTips",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, in one lower extremity.",
        "value": 3
      },
      {
        "text": "Present, in both lower extremities.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Presence of claudication in lower extremities:",
    "name": "ClaudicationLowerExtremities",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, in one lower extremity.",
        "value": 3
      },
      {
        "text": "Present, in both lower extremities.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Cold or cool upper extremities' tips:",
    "name": "ColdUpperLimbTips",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, in one upper extremity.",
        "value": 3
      },
      {
        "text": "Present, in both upper extremities.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Femoral pulses.",
    "name": "FemoralPulses",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Present, normal without any delay (normally there should be no delay between radial and femoral pulses).",
        "value": 2
      },
      {
        "text": "Absent, very weak, or delayed on one extremity.",
        "value": 3
      },
      {
        "text": "Absent, very weak, or delayed on both extremities.",
        "value": 4
      }
    ],
    "category": "Cardiovascular physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Are the blood pressures taken bilaterally on popliteal arteries (cuff placed on thigh) higher by 10 mmHg or more than the blood pressures on brachial arteries (both blood pressures taken with patient supine) ?",
    "name": "BloodPressureDifference",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Yes. (This is normal finding).",
        "value": 2
      },
      {
        "text": "No, blood pressures taken bilaterally on popliteal arteries are lower or similar to the blood pressures on brachial arteries.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Bruits over carotid arteries.",
    "name": "CarotidBruits",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Bruits over renal arteries.",
    "name": "RenalBruits",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Cardiovascular physical examination"
  },
  {
    "text": "Midline epigastric tenderness:",
    "name": "EpigastricTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Lower abdomen, suprapubic, midline tenderness:",
    "name": "LowerMidAbdTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Periumbilical region tenderness:",
    "name": "PeriumbilicaAbdTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Right upper quadrant tenderness:",
    "name": "RUQTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Left upper quadrant tenderness:",
    "name": "LUQTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Right or left lower quadrant tenderness:",
    "name": "RLLQTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present in right lower quadrant or unable to assess (i.e. patient unresponsive).",
        "value": 3
      },
      {
        "text": "Present in left lower quadrant or unable to assess.",
        "value": 5
      },
      {
        "text": "Present in both lower quadrants or unable to assess.",
        "value": 6
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Rebound tenderness (Blumberg's sign):",
    "name": "ReboundTenderness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Normal (negative).",
        "value": 2
      },
      {
        "text": "Abnormal (positive) or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Abdominal guarding:",
    "name": "AbdGuarding",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Murphy's sign:",
    "name": "MurphysSign",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Normal (negative).",
        "value": 2
      },
      {
        "text": "Abnormal (positive) or unable to assess (i.e. patient unresponsive)",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is bladder enlarged on palpation?",
    "name": "BladderFull",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is bladder small on palpation or too small to be palpated (due to its size) at all? ",
    "name": "BladderEmpty",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Tenderness  in the area of right or left inguinal ligament:",
    "name": "RLInguinalAreaTender",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Palpated bulge in the area of right or left inguinal ligament (sometimes patient needs to be standing or needs to cough lightly during the examination to better appreciate the bulge): ",
    "name": "RLInguinalAreaCoughBulge",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Inguinal lymphadenopathy:",
    "name": "InguinalLymphadenopathy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Skin physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Axillary lymphadenopathy:",
    "name": "AxillaryLymphadenopathy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "category": "Skin physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Hemorrhoids are apparent during rectal exam:",
    "name": "RectalExamHemorrhoids",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but they are not tender.",
        "value": 3
      },
      {
        "text": "Yes, and they are tender or unable to assess (i.e. patient unresponsive).",
        "value": 4
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Mass palpated and apparent during rectal exam:",
    "name": "RectalExamRectalCancer",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Rectal fissure is apparent during rectal exam:",
    "name": "RectalExamFissure",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is there black/red content on rectal exam?",
    "name": "RectalExamBlood",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is hepatomegaly apparent on an abdominal exam?",
    "name": "HepatomegalyEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is liver irregular on palpation ?",
    "name": "IrregularLiverEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Gastrointestinal physical examination"
  },
  {
    "text": "Is the testis tender?",
    "name": "TestisTenderPE",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No or female patient.",
        "value": 2
      },
      {
        "text": "Present or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Is the testis enlarged?",
    "name": "TestisEnlarged",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No or female patient.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Is the testis irregular?",
    "name": "TestisIrregular",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No or female patient.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Goldflam's sign (also known as costovertebral angle tenderness (CVAT), or Murphy's punch sign) :",
    "name": "GoldflamsSign",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Normal (negative).",
        "value": 2
      },
      {
        "text": "Abnormal (positive) or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Is prostate tender on rectal exam?",
    "name": "RectalExamProstateTEnder",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive).",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Prostate is enlarged on rectal exam:",
    "name": "RectalExamProstateEnlarged",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Locally, asymmetrically enlarged (irregular nodularities), with possible partial lack of median sulcus.",
        "value": 3
      },
      {
        "text": "Yes. Generally enlarged, but with the median sulcus preserved.",
        "value": 4
      },
      {
        "text": "Yes. Generally enlarged, with complete lack of palpable median sulcus .",
        "value": 5
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Is prostate hardened on rectal exam?",
    "name": "RectalExamProstateHardened",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Locally, asymmetrically  (irregular hardened nodularities).",
        "value": 3
      },
      {
        "text": "Yes. Generally hardened.",
        "value": 4
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Is prostate irregular on rectal exam?",
    "name": "RectalExamProstateIrregular",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. Irregular.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination"
  },
  {
    "text": "Are there punctate haemorrhages on vaignal walls or cervix on vaginal examination?",
    "name": "PresenceOfPunctateHaemorrhagesOnVaginalExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there thin and dry mucosa on vaginal examination?",
    "name": "PresenceOfThinAndDryMucosa",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Are there features of vulvar inflammation (i.e., erythema, tenderness) vaginal examination?",
    "name": "PresenceOfVulvarInflamation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Genitourinary physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "Cyanosis",
    "text": "Lips cyanosis",
    "category": "Skin physical examination",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": ""
  },
  {
    "text": "Any signs of infection at insertion sites or in the are of indwelling catheters if present (i.e. central line, picc line, chemotherapy ports) ?",
    "name": "SignsOfInfectionAtExitSitesOfCatheters",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Skin physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Skin moisture:",
    "name": "SkinMoistureExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Regularly moist.",
        "value": 2
      },
      {
        "text": "Dry.",
        "value": 3
      },
      {
        "text": "Moist.",
        "value": 4
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Jaundice:",
    "name": "Jaundice",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Skin petechiae or hemorrhaging changes:",
    "name": "SkinPetechiaeRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Exfoliation:",
    "name": "SkinExfoliativeRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, limited to in between toes and fingers.",
        "value": 3
      },
      {
        "text": "Present, limited to other than in between toes and fingers skin areas.",
        "value": 4
      },
      {
        "text": "Present, generalized.",
        "value": 5
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Limb tips fingers/toes ischemic signs on skin (i.e. acro-cyanosis, bullae, dry gangrene):",
    "name": "SkinIschemicChanges",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, on toes' and fingers' tips.",
        "value": 3
      }
    ],
    "category": "Skin physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Urticaria:",
    "name": "SkinUrticariaRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present, localized.",
        "value": 3
      },
      {
        "text": "Present, generalized.",
        "value": 4
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Presence of condylomata lata?",
    "name": "CondylomataExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Zoster or cold sores (herpetic) rash present:",
    "name": "SkinHerpesRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Skin macules on exam:",
    "name": "SkinErythemamaculesRasExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Skin papules on exam:",
    "name": "SkinErythemapapulesRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Skin pustules on exam:",
    "name": "SkinErythemapustulesRashExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized.",
        "value": 3
      },
      {
        "text": "Yes, and generalized.",
        "value": 4
      }
    ],
    "category": "Skin physical examination"
  },
  {
    "text": "Skin flushing on exam:",
    "name": "SkinFlushingExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, localized (i.e. face, neck, chest).",
        "value": 4
      },
      {
        "text": "Yes, and generalized.",
        "value": 6
      }
    ],
    "category": "Skin physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is neuro exam revealing localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) over lower extremities:",
    "name": "LocalizedNeuroSensLEEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory deficit in lower extremities.",
        "value": 2
      },
      {
        "text": "There is a localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) in lower extremities.",
        "value": 3
      },
      {
        "text": "There is a localized sensory deficit, paresthesias or pain along skin dermatomes (i.e. L5 lateral leg, S1 posterior leg) in lower extremities with associated rash: erythematous papules, grouped vesicles or bullae.",
        "value": 4
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is neuro exam revealing localized motor deficit of lower extremities:",
    "name": "LocalizedNeuroMotoLEEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized motor deficit in lower extremities.",
        "value": 2
      },
      {
        "text": "There is a localized motor deficit in lower extremities.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is neuro exam revealing localized sensory deficit, paresthesias or pain along skin dermatomes over upper extremities or neck:",
    "name": "LocalizedNeuroSensUEEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory deficit on upper extremities or neck.",
        "value": 2
      },
      {
        "text": "There is localized sensory deficit, paresthesias or pain along skin dermatomes on upper extremities or neck.",
        "value": 3
      },
      {
        "text": "There is localized sensory deficit, paresthesias or pain along skin dermatomes on upper extremities or neck with associated rash: erythematous papules,grouped vesicles or bullae.",
        "value": 4
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is neuro exam revealing localized motor deficit of upper extremities or neck:",
    "name": "LocalizedNeuroMotoUEEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized motor deficit in upper extremities or neck.",
        "value": 2
      },
      {
        "text": "There is a localized motor deficit in upper extremities or neck.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is neuro exam revealing localized sensory deficit, paresthesias or pain along skin dermatomes on trunk or face?",
    "name": "LocalizedSensoryDeficitEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized sensory deficit on trunk or face.",
        "value": 2
      },
      {
        "text": "There is localized sensory deficit, paresthesias or pain along skin dermatomes on trunk or face.",
        "value": 3
      },
      {
        "text": "There is localized sensory deficit, paresthesias or pain along skin dermatomes on trunk or face with associated rash: erythematous papules,grouped vesicles or bullae.",
        "value": 4
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is neuro exam revealing localized motor deficit on trunk or face?",
    "name": "LocalizedMotorDeficitEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No localized motor deficit on trunk or face.",
        "value": 2
      },
      {
        "text": "There is localized motor deficit, paresthesias or pain along skin dermatomes on trunk or face.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Generalized or affecting multiple muscle groups weakness on exam:",
    "name": "GeneralizedWeaknessExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but not in all muscles.",
        "value": 3
      },
      {
        "text": "Yes, in all muscles, but apears only after repeated muscle contractions.",
        "value": 4
      },
      {
        "text": "Yes, in all muscles, present before repeated muscle contractions, and is not resolving  after multiple muscle contractions.",
        "value": 5
      },
      {
        "text": "Yes, mostly in proximal muscles, present before repeated muscle contractions, and resolves or decreases after multiple muscle contractions.",
        "value": 6
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Aphasia (motor or sensory) on exam:",
    "name": "AphasiaExam",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No aphasia.",
        "value": 2
      },
      {
        "text": "Yes, there is aphasia on exam.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Presence of meningeal signs on exam (i.e. Brudzinski's, Kernig's):",
    "name": "MeningealSigns",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No meningeal signs on exam.",
        "value": 2
      },
      {
        "text": "There are meningeal signs on exam.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Romberg's sign:",
    "name": "RombergsSign",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Babinski's or plantar reflex (foot's sole stimulation causes upward response - extension of the toes):",
    "name": "BabinskiSign",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Feet or ankle clonus (more than 4 beats of reflex after abrupt dorsiflexion of foot):",
    "name": "FeetClonus",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "General hyperreflexia on deep tendon reflexes examination:",
    "name": "GeneralHyperreflexia",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Present.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Straight leg raise (Las?gue's sign):",
    "name": "StraightLegRaise",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Crossed straight leg (the leg of the unnafected by low back pain radiation) :",
    "name": "CrossedStraightLegRaise",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is weak ankle dorsiflection, lack or weak ankle jerk (Achilles deep tendon reflex) or calf wasting present on one or both legs?",
    "name": "WeakAnkle",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Is there a lack or weak knee jerk on both or one leg?",
    "name": "WeakKnee",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "category": "Neurologic physical examination"
  },
  {
    "text": "Nystagmus / uncontrolled eye movements :",
    "name": "NystagmusEyeMovements",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Absent.",
        "value": 2
      },
      {
        "text": "Nystagmus present, the ocular clonus.",
        "value": 4
      },
      {
        "text": "Nystagmus present, not the ocular clonus though.",
        "value": 6
      }
    ],
    "category": "Neurologic physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is there a lack of normal lumbar lordosis?",
    "name": "LumbarLordosis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there paraspinal muscles or facets tenderness?",
    "name": "ParaspinalMuscles",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive). ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there limited spine lateral or anterior flexion?",
    "name": "LimitedSpine",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there any tenderness on percussion of C spine vertebrae?",
    "name": "CspineTenderEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive). ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there any tenderness on percussion of T spine vertebrae?",
    "name": "TspineTenderEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive). ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there any tenderness on percussion of L spine vertebrae?",
    "name": "LspineTenderEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive). ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "Is there any tenderness on percussion of S spine vertebrae?",
    "name": "SspineTenderEx",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes or unable to assess (i.e. patient unresponsive). ",
        "value": 3
      }
    ],
    "category": "Musculoskeletal physical examination"
  },
  {
    "text": "How good is verbal contact with the patient?",
    "name": "MSVerbalContact",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient oriented and converses normally. ",
        "value": 2
      },
      {
        "text": "Patient confused.",
        "value": 3
      },
      {
        "text": "Patient uses inaprioprate words.",
        "value": 4
      },
      {
        "text": "Patient uses incomprehensible sounds.",
        "value": 5
      },
      {
        "text": "Patient has no verbal response.",
        "value": 6
      }
    ],
    "category": "Psychiatric physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Patient's orientation:",
    "name": "MSOrientation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient oriented to all 3: person, place and time. ",
        "value": 2
      },
      {
        "text": "Patient oriented to 2 of 3.",
        "value": 3
      },
      {
        "text": "Patient oriented to 1 of 3.",
        "value": 4
      },
      {
        "text": "Patient oriented to none of 3.",
        "value": 5
      }
    ],
    "category": "Psychiatric physical examination"
  },
  {
    "text": "Can patient be awaken?",
    "name": "MSFullyAwakens",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient is awake.",
        "value": 2
      },
      {
        "text": "Patient is drowsy and arousable, and once woken, becomes fully responsive and cooperative.",
        "value": 3
      },
      {
        "text": "Patient is drowsy and arousable, but even when woken, never becomes neither fully responsive or cooperative.",
        "value": 4
      },
      {
        "text": "Patient is unarousable.",
        "value": 5
      }
    ],
    "category": "Psychiatric physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "How long, upon awakening, patient can stay awake?",
    "name": "MSDrowsiness",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient is awake.",
        "value": 2
      },
      {
        "text": "Not awake, but can maintain responsiveness upon awakening for some time.",
        "value": 3
      },
      {
        "text": "Not awake, and can not maintain responsiveness upon awakening for even minimal time. ",
        "value": 4
      }
    ],
    "category": "Psychiatric physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "If patient can be awaken, what is the minimal necessary stimulus to wake patient up?",
    "name": "MSStimulusAwakens",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient is awake, non drowsy.",
        "value": 2
      },
      {
        "text": "Patient is awake, but drowsy.",
        "value": 3
      },
      {
        "text": "Patient is not awake, but arousable, verbal stimulus is enough to wake patient up.",
        "value": 4
      },
      {
        "text": "Patient is not awake, but arousable, tactile stimulus is necessary to wake patient up.",
        "value": 5
      },
      {
        "text": "Patient is not awake, but arousable, and painful stimulus is necessary to wake patient up.",
        "value": 6
      },
      {
        "text": "Patient is unarousable.",
        "value": 7
      }
    ],
    "category": "Psychiatric physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "text": "Is patient agitated ?",
    "name": "MSAgitated",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Patient is not agitated.",
        "value": 2
      },
      {
        "text": "Patient is less than extremely agitated, but coherent.",
        "value": 3
      },
      {
        "text": "Patient is less than extremely agitated and incoherent.",
        "value": 4
      },
      {
        "text": "Patient is extremely agitated, but coherent.",
        "value": 5
      },
      {
        "text": "Patient is extremley agitated and incoherent.",
        "value": 6
      }
    ],
    "category": "Psychiatric physical examination",
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "HGBlevel",
    "text": "Hemoglobin level g/dl",
    "category": "Blood work",
    "type": "double",
    "default": 14.5,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 35.0,
    "step": 0.1,
    "subcategory1": "hemoglobin ",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "WBClevel",
    "text": "WBC (white blood count, absolute leukocytes count) K/ul",
    "category": "Blood work",
    "type": "integer",
    "default": 8000,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0,
    "max": 10000000,
    "step": 1.0,
    "subcategory1": "white cells (WBC) ",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "LymphocyteLevel",
    "text": "Lymphocytes (Lymph) absolute count 1/ul",
    "category": "Blood work",
    "type": "double",
    "default": 3000.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100000000.0,
    "step": 0.1,
    "subcategory1": "lymphocyte level ",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "SerumCreatinine",
    "text": "Serum creatinine in mg/dl.",
    "category": "Blood work",
    "type": "double",
    "default": 1.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.01,
    "subcategory1": "creatinine",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "PlateletsLevel",
    "text": "Platelets (PLTs, thrombocytes) absolute count 1/ul",
    "category": "Blood work",
    "type": "double",
    "default": 300000.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 12000000.0,
    "step": 0.1,
    "subcategory1": "platelets (PLT)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "TSAT",
    "text": "Percent transferrin saturation - ratio of serum iron to TIBC and expressed as a percentage (TSAT = iron ? TIBC x 100).",
    "category": "Blood work",
    "type": "double",
    "default": 30.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "transferrin saturation (TIBC)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "antiPLA2Rab",
    "text": "Positive anti PLA2R antibodies (anti phospholipase 2 receptor antibodies).",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 50.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "antiTHSD7Aab",
    "text": "Positive anti THSD7A antibodies ( anti thrombospondin type 1 domain-containing 7A) .",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 50.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "HepatitisCAntibodiesTotalIgGAndIgM",
    "text": "Positive anti-hepatitis C antibodies (either one IgG or IgM).",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 50.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "Albuminlevel",
    "text": "Albumin level g/dl",
    "category": "Blood work",
    "type": "double",
    "default": 4.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 10.0,
    "step": 0.1,
    "subcategory1": "albumin",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "CRPlevel",
    "text": "Blood C-reactive protein (CRP) level mg/l (mcg/ml)",
    "category": "Blood work",
    "type": "double",
    "default": 0.3,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 300.0,
    "step": 0.1,
    "subcategory1": "C-reactive protein (CRP)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "AldoRenin",
    "text": "Aldosterone-to-renin ratio (ARR), ng/dl per ng/(ml?h)",
    "category": "Blood work",
    "type": "double",
    "default": 6.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 300.0,
    "step": 0.1,
    "subcategory1": "aldosterone-to-renin ratio (ARR)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "Aldosterone",
    "text": "Aldosterone (ng/dl) - 8 a.m. draw time (after the patient is active for 2 hours), peripheral vein ",
    "category": "Blood work",
    "type": "double",
    "default": 6.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 300.0,
    "step": 0.1,
    "subcategory1": "aldosterone",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "Potassium",
    "text": "What is potassium level (blood) mmol/l?",
    "category": "Blood work",
    "type": "double",
    "default": 4.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 1.0,
    "max": 10.0,
    "step": 0.1,
    "subcategory1": "potassium",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "DDimer",
    "text": "D-dimer mg/l (mcg/ml)",
    "category": "Blood work",
    "type": "double",
    "default": 0.1,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 30000.0,
    "step": 0.01,
    "subcategory1": "d-dimer (DD)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "PCT",
    "text": "Serum procalcitonin (PCT) level ng/ml (mcg/l)",
    "category": "Blood work",
    "type": "double",
    "default": 0.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 5100.0,
    "step": 0.01,
    "subcategory1": "procalcitonin (PCT)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "LDH",
    "text": "Blood lactate dehydrogenase (LDH) level U/L (mU/mL)",
    "category": "Blood work",
    "type": "double",
    "default": 4.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 223100.0,
    "step": 0.1,
    "subcategory1": "actate dehydrogenase (LDH)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "AST",
    "text": "Serum aspartate aminotransferase AST (SGOT) level (U/L)",
    "category": "Blood work",
    "type": "double",
    "default": 17.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 223100.0,
    "step": 0.1,
    "subcategory1": "aspartate aminotransferase AST (SGOT)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "ALT",
    "text": "Serum alanine aminotransferase ALT (SGTP) level (U/L)",
    "category": "Blood work",
    "type": "double",
    "default": 14.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 223100.0,
    "step": 0.1,
    "subcategory1": "alanine aminotransferase ALT (SGTP)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "SerumCK",
    "text": "Serum creatine kinase  (CK) level (U/L)",
    "category": "Blood work",
    "type": "double",
    "default": 12.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 1123100.0,
    "step": 0.1,
    "subcategory1": "creatine kinase  (CK)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "BNP",
    "text": "brain natriuretic protein (BNP) level in pg/ml.",
    "category": "Blood work",
    "type": "double",
    "default": 100.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 50000.0,
    "step": 0.1,
    "subcategory1": "brain natriuretic protein (BNP)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "PSA",
    "text": "prostate specific antigen (PSA) ng/ml",
    "category": "Blood work",
    "type": "double",
    "default": 0.3,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 1000.0,
    "step": 0.1,
    "subcategory1": "prostate specific antigen (PSA)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "Bicarb",
    "text": "Bicarb on BMP/CMP or (less desirable) on ABG ",
    "category": "Blood work",
    "type": "double",
    "default": 24.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 60.0,
    "step": 0.1,
    "subcategory1": "bicarbonate",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum "
  },
  {
    "name": "LacticAcid",
    "text": "Lactic acid (lactate) level in peripheral blood.",
    "category": "Blood work",
    "type": "double",
    "default": 1.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": 0.1,
    "max": 20.0,
    "step": 0.1,
    "subcategory1": "lactic acid (lactate) ",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "serum"
  },
  {
    "name": "AnionGap",
    "text": "Anion gap calculated as Na-Cl-Bicarb taken from BMP/CMP",
    "category": "Blood work",
    "type": "integer",
    "default": 8,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": -10,
    "max": 100,
    "step": 0.1,
    "subcategory1": "anion gap",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "BetaHydroxyButyrate",
    "text": "Beta-hydroxy-butyrate elevated",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": -10,
    "max": 100,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "Hba1c",
    "text": "Glycated hemoglobin HbA1C",
    "category": "Blood work",
    "type": "double",
    "default": 5.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": 0.0,
    "max": 25.0,
    "step": 0.1,
    "subcategory1": "glycated hemoglobin HbA1C",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "GAD65",
    "text": "glutamic acid decarboxylase auto-antibody",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "InsulinAA",
    "text": "Insulin auto-antibody.",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "TyrosinePhosphatases",
    "text": "Insulinoma-associated proteins 2 (IA-2) and (IA-2 beta) auto-antibody.",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "IsletCellAA",
    "text": "Islet cell auto-antibody.",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "ZincTransporterZNT8",
    "text": "Zinc transporter auto-antibody.",
    "category": "Blood work",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative.",
        "value": 2
      },
      {
        "text": "Positive.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100.0,
    "step": 0.1,
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "FastingGlucose",
    "text": "Fasting glucose (mg/dL)",
    "category": "Blood work",
    "type": "double",
    "default": 90.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": 0.0,
    "max": 5000.0,
    "step": 1.0,
    "subcategory1": "fasting glucose level",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "TwoHrPlasmaGlucoseDuringOGTT",
    "text": "Two hours plasma guclose during OGTT (mg/dL)",
    "category": "Blood work",
    "type": "double",
    "default": 100.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": 0.0,
    "max": 5000.0,
    "step": 1.0,
    "subcategory1": "two hours glucose during OGTT",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "plasma"
  },
  {
    "name": "RandomBloodGlucose",
    "text": "Random plasma glucose level",
    "category": "Blood work",
    "type": "double",
    "default": 120.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. It is elevated up to 5 times upper normal limit.",
        "value": 3
      },
      {
        "text": "Yes. It is elevated more than 5 times upper normal limit.",
        "value": 4
      }
    ],
    "min": 0.0,
    "max": 5000.0,
    "step": 1.0,
    "subcategory1": "random plasma glucose level",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "Proteinuria",
    "text": "Protein excretion in urine (proteinuria) in mg/day",
    "category": "Urine test",
    "type": "double",
    "default": 0.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      },
      {
        "text": "Yes, more than 1gm/day, up to 3.5gm/day",
        "value": "4"
      },
      {
        "text": "Yes, more than 3.5gm/day.",
        "value": "5"
      }
    ],
    "min": 0.0,
    "max": 10000.0,
    "step": 0.1,
    "subcategory1": "daily protein excretion (24 hours urine collection)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "urine"
  },
  {
    "name": "Albuminuria",
    "text": "Total daily albumin excretion in urine in mg/day (albuminuria) from 24 hours urine collection",
    "category": "Urine test",
    "type": "double",
    "default": 0.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 100000.0,
    "step": 0.1,
    "subcategory1": "daily albumin excretion (24 hours urine collection)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "urine"
  },
  {
    "name": "FeaturesOfHematuriaOnUA",
    "text": "Hematuria on urinalysis (more than 2 red blood cells /hpf in visual field, red urine, or presence of red cell casts or dysmorphic (acanthocytes) red cells in the urine)?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes. There are more than 2 RBCs /hpf in the urine, but no acanthocytes, nor red cell casts.",
        "value": 3
      },
      {
        "text": "Yes. Red cell casts are present, but there are no acanthocytes, or less than 50% of RBCs seen are acanthocytes.",
        "value": 4
      },
      {
        "text": "Yes. More than 50% of RBCs seen are acanthocytes, but there are no red cell casts are present.",
        "value": 5
      },
      {
        "text": "Yes. More than 50% of RBCs seen are acanthocytes, and there are red cell casts are present.",
        "value": 6
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "gFOBT",
    "text": "Guaiac fecal occult blood test (gFOBT):",
    "category": "Stool test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Stool is negative for heme.",
        "value": 2
      },
      {
        "text": "Stool is positive for heme.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "pCO2onABG",
    "text": "pCO2 on ABG in mmHg",
    "category": "Arterial blood gas analysis",
    "type": "double",
    "default": 40.0,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 0.0,
    "max": 160.0,
    "step": 0.1,
    "subcategory1": "pCo2",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "arterial blood gasses"
  },
  {
    "name": "pHonABG",
    "text": "pH on ABG in mmHg",
    "category": "Arterial blood gas analysis",
    "type": "double",
    "default": 7.4,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 5.5,
    "max": 9.5,
    "step": 0.01,
    "subcategory1": "pH",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "arterial blood gasses "
  },
  {
    "name": "pHofVaginalDc",
    "text": "pH of vaginal discharge",
    "category": "Vaginal mucus or discharge analysis",
    "type": "double",
    "default": 3.5,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "min": 1.0,
    "max": 13.5,
    "step": 0.1,
    "subcategory1": "pH",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "vaginal discharge or mucus"
  },
  {
    "name": "HypercapniaOnAbg",
    "text": "Hypercapnia presence on ABG / VBG.",
    "category": "Arterial blood gas analysis",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "FeaturesOfInflamationOnUA",
    "text": "Features of infection or inflammation on urinalysis (elevated leukocyte esterase, nitrates, more than 5 white blood cells in visual field, pyuria, cloudy urine) ?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "GramStainUrineGonococcus",
    "text": "Urine, or genitourinary discharge sample gram stain positive for gram negative diplococci in urine (gonococcus)?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "WetMountResults",
    "text": "What is the results of saline wet mount specimen from vaginal discharge?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No trichomonads visualized, and leukocytes less prevalent than epithelial cells on saline wet mount.",
        "value": 2
      },
      {
        "text": "Trichomonads visualized, but leukocytes less prevalent than epithelial cells on saline wet mount.",
        "value": 3
      },
      {
        "text": "Trichomonads not visualized, but leukocytes more prevalent than epithelial cells on saline wet mount.",
        "value": 4
      },
      {
        "text": "Trichomonads visualized and leukocytes more prevalent than epithelial cells on saline wet mount.",
        "value": 5
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "WhiffTestResults",
    "text": "What is the results of microscopic examination of saline mount of vaginal discharge / mucus specimen and of \"whiff test\" (presence fishy odour after application of potassium hydroxide KOH)?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No clue cells, no fishy odour after treatment of the specimen with KOH",
        "value": 2
      },
      {
        "text": "No clue cells, there is positive \"whiff test\" (fishy odour), but no budding yeast or branching mycelia after treatment of the specimen with KOH.",
        "value": 3
      },
      {
        "text": "Clue cells are visible, there is negative \"whiff test\" (no fishy odour), and no budding yeast or branching mycelia after treatment with KOH.",
        "value": 4
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "BuddingYeastMyceliaAfterKOH",
    "text": "Are there budding yeast or mycelia seen on the vaginal discharge/mucus specimen after application of potassium hydroxide KOH?",
    "category": "Urine test",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No budding yeast or branching mycelia are seen after the treatment of the specimen with KOH",
        "value": 2
      },
      {
        "text": "Budding yeast or branching mycelia are seen after the treatment of the specimen with KOH",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "CxrayFocalInfiltrate",
    "text": "Presence of infiltrate or infiltrates on chest x-ray?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, unilateral focal infiltrates.",
        "value": 3
      },
      {
        "text": "Yes, bilateral focal infiltrates.",
        "value": 4
      }
    ],
    "subcategory1": "x-ray",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "XrayDoubleBariumEnemaForColonCa",
    "text": "Double-contrast barium enema to evaluate for colon cancer.",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Reveals no colon mass, tumor or lesion.",
        "value": 2
      },
      {
        "text": "Reveals colon mass, tumor or lesion.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "HydroOnCT",
    "text": "Hydronephrosis on abdominal / pelvic CT scan (no IV contrast necessary).",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal / pelviuc"
  },
  {
    "name": "GroundGlassOnChestCt",
    "text": "Ground glass opacities evident on chest CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "IntersitialAbnormalitiesOnChestCt",
    "text": "Interstitial abnormalities evident on chest CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "LocalPatchyInfiltratesOnChestCt",
    "text": "Bilateral infiltrates evident on chest CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "DiverticulitisOnCt",
    "text": "Diverticulitis evident on an abdominal / pelvic CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal / pelvic"
  },
  {
    "name": "AppendicitsOnCt",
    "text": "Appendicits evident on an abdominal / pelvic CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal / pelvic "
  },
  {
    "name": "AppendicitsOnUS",
    "text": "Appendicits evident on an abdominal / pelvic sonogram",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "right lower quadrant ultrasound",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal"
  },
  {
    "name": "RenalArteriesDigitalSubstractionAngiography",
    "text": "Is there hemodynamically significant renal artery stenosis on renal arteries' digital substraction angiography?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "digital substraction angiography",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "renal arteries'"
  },
  {
    "name": "RenalArteriesMagneticResonanceAngiographyWithGadolinum",
    "text": "Is there hemodynamically significant renal artery stenosis visualized on renal arteries' magnetic resonance angiography with gadolinum?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Unable to perform  as patient can't be administered gadolinum.",
        "value": 2
      },
      {
        "text": "No.",
        "value": 3
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "subcategory1": "magnetic resonance angiography with gadolinum",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "renal arteries'"
  },
  {
    "name": "RenalArteriesCTAngiographyWithIVDye",
    "text": "Is there hemodynamically significant renal artery stenosis visualized on renal arteries' CT-angiogram with IV dye?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Unable to perform  as patient can't be administered IV-dye.",
        "value": 2
      },
      {
        "text": "No.",
        "value": 3
      },
      {
        "text": "Yes.",
        "value": 4
      }
    ],
    "subcategory1": "CT-angiogram",
    "subcategory2": "IV-due ehnanced",
    "subcategory3": "",
    "subcategory4": "renal arteries'"
  },
  {
    "name": "BiliaryColicOnCt",
    "text": "Biliary colic is evident on an abdominal CT scan",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal"
  },
  {
    "name": "BiliaryCollicOnUS",
    "text": "Biliary colic is evident on abdominal sonogram",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "sonogram",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal "
  },
  {
    "name": "BiliaryCollicOnEUS",
    "text": "Biliary colic is evident on endoscopic sonogram",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "ultrasound",
    "subcategory2": "endoscopic",
    "subcategory3": "",
    "subcategory4": "biliary tract"
  },
  {
    "name": "PeriNephricStrandingOnCT",
    "text": "Peri-nephric stranding on an abdominal / pelvic CT scan (no IV contrast).",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "no IV contrast",
    "subcategory3": "",
    "subcategory4": "abdominal and pelvic "
  },
  {
    "name": "NephrolithiasisOnCT",
    "text": "Nephrolithiasis on an abdominal / pelvic CT scan (no IV contrast).",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "no IV contrast",
    "subcategory3": "",
    "subcategory4": "abdominal and pelvic "
  },
  {
    "name": "NephrolithiasisOnUS",
    "text": "Nephrolithiasis on an abdominal / pelvic ultrasound.",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "ultrasound",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "abdominal and pelvic "
  },
  {
    "name": "ColonMalignancyOnCTColonography",
    "text": "CT colonography for colon polyp, mass or tumors.",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Neagtive for tumor, mass or polyp",
        "value": 2
      },
      {
        "text": "Positive for tumor, mass or polyp",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "virtual-colonoscopy",
    "subcategory3": "",
    "subcategory4": "colon"
  },
  {
    "name": "DenseBreastTissueOnMammography",
    "text": "Is mammography revealing high breast density on mammography?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "mammography",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "breast"
  },
  {
    "name": "HydroOnUS",
    "text": "Hydronephrosis on retroperitoneal ultrasound.",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, hydronephrosis unilateral.",
        "value": 3
      },
      {
        "text": "Yes, hydronephrosis bilateral.",
        "value": 4
      }
    ],
    "subcategory1": "ultrasound",
    "subcategory2": "bilateral",
    "subcategory3": "",
    "subcategory4": "renal (retroperitoneal)"
  },
  {
    "name": "RenalArterieDuplexUltrasonography",
    "text": "Is there hemodynamically significant renal artery stenosis visualized on renal arteries' duplex ultrasonography?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "Dupplex ultrasound",
    "subcategory2": "bilateral",
    "subcategory3": "",
    "subcategory4": "renal (retroperitoneal)"
  },
  {
    "name": "RenalAsymmetryOnUS",
    "text": "Is there a difference in kidney sizes on retroperitoneal ultrasound?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, but the difference in length is less than 1.5cm.",
        "value": 3
      },
      {
        "text": "Yes, and the difference in length is more than 1.5cm.",
        "value": 4
      }
    ],
    "subcategory1": "ultrasound",
    "subcategory2": "bilateral",
    "subcategory3": "",
    "subcategory4": "renal (retroperitoneal)"
  },
  {
    "name": "ElevatedPVR",
    "text": "Elevated (for example > 100cc) of post void volume in bladder?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "ultrasound or scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "bladder"
  },
  {
    "name": "ThickenedBladderWall",
    "text": "Thickened wall of bladder on utlrasound?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "ultrasound or scan",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "bladder"
  },
  {
    "name": "JugularVeinFacialVeinsThrombosis",
    "text": "Jugular or facial veins thrombosis on ultrasound Doppler evaluation",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "ultrasound Doppler",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "jugular veins"
  },
  {
    "name": "JugularVeinFacialVeinsThrombosisonCT",
    "text": "Jugular or facial veins thrombosis on IV dye enhanced CT?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "CT scan",
    "subcategory2": "IV dye enhanced",
    "subcategory3": "",
    "subcategory4": "jugular veins, facial veins, neck tissues"
  },
  {
    "name": "CxrayPleuralEffusion",
    "text": "Presence of pleural effusion(s) on chest x-ray?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes, left sided.",
        "value": 3
      },
      {
        "text": "Yes, right sided.",
        "value": 4
      },
      {
        "text": "Yes, bilateral.",
        "value": 5
      }
    ],
    "subcategory1": "x-ray",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "CxrayPneumothorax",
    "text": "Presence of pneumothorax on chest x-ray?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "x-ray",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "CxrayBlInfilEdema",
    "text": "Findings of pulmonary (interstitial) edema on chest x-ray?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "x-ray",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "CxrayBilInfiltrates",
    "text": "Findings of bilateral infiltrates on chest x-ray?",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "x-ray",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "chest"
  },
  {
    "name": "BrainCTNonContrastForSAH",
    "text": "STAT CT scan, non contrast, of the brain to evaluate for subarachnoid hemorrhage (SAH).",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative for subarachnoid hemorrhage (SAH).",
        "value": 2
      },
      {
        "text": "Positive for subarachnoid hemorrhage (SAH).",
        "value": 3
      }
    ],
    "subcategory1": "CT (computed tomography)",
    "subcategory2": "non contrast",
    "subcategory3": "",
    "subcategory4": "brain"
  },
  {
    "name": "BrainCTNonContrastForICH",
    "text": "STAT CT scan, non contrast, of the brain to evaluate for the presence of intracranial hemorrhage (ICH).",
    "category": "Imaging",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative intracranial hemorrhage (ICH).",
        "value": 2
      },
      {
        "text": "Positive intracranial hemorrhage (ICH).",
        "value": 3
      }
    ],
    "subcategory1": "CT (computed tomography)",
    "subcategory2": "non contrast",
    "subcategory3": "",
    "subcategory4": "brain"
  },
  {
    "name": "MembranousNephropathyOnBiopsy",
    "text": "Features of membranous nephropathy on kidney biopsy?",
    "category": "Biopsy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "biopsy",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "kidney"
  },
  {
    "name": "TransrectalProstateBiopsy",
    "text": "Ultrasound guided transrectal prostate biopsy",
    "category": "Biopsy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No evidence of prostate cancer.",
        "value": 2
      },
      {
        "text": "Evidence of prostate cancer.",
        "value": 3
      }
    ],
    "subcategory1": "biopsy",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "prostate"
  },
  {
    "name": "PCRCovid",
    "text": "Results of real-time reverse-transcriptase?polymerase-chain-reaction (RT-PCR) for SARS-CoV-2 causative agent of COVID-19 assay of nasal or pharyngeal swab specimens:",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "swab for PCR",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "nasal or pharyngeal"
  },
  {
    "name": "PCRGonococcus",
    "text": "Results of real-time reverse-transcriptase?polymerase-chain-reaction (RT-PCR)  for Neisseria gonorrhea of urine or genitourinary discharge (mucus).",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "swab for PCR",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "nasal or pharyngeal"
  },
  {
    "name": "PCRChlamydia",
    "text": "Results of real-time reverse-transcriptase?polymerase-chain-reaction (RT-PCR)  for Chlamydia Trachomatis of urine or genitourinary discharge (mucus).",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "swab for PCR",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "nasal or pharyngeal"
  },
  {
    "name": "PCRRNAHepC",
    "text": "Hepatitis C RNA PCR",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "PCR",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "PCRFlu",
    "text": "Results of reverse-transcriptase polymerase chain reaction (RT-PCR) for influenza (flu) of specimens such as nasopharyngeal aspirates, bronchoalveolar lavage fluid, or nasal and throat swabs:",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "swab PCR",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "nasopharyngeal aspirates, bronchoalveolar lavage fluid, and nasal and throat"
  },
  {
    "name": "BloodCulturesx2",
    "text": "Peripheral blood cultures resutls, 2 sets (aerobic and anaerobic bacterial cultures), preferrably from 2 peripheral sticks, 15 minutes apart.",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "blood cultures, 2 sets (aerobic and anaerobic bacterial cultures), preferrably from 2 peripheral sticks, 15 minutes apart",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "LegionellaUrinaryAntigenFeature",
    "text": "Legionella urinary antigen:",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "legionella antigen test",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "urinary "
  },
  {
    "name": "StreptococcusUrinaryAntigenFeature",
    "text": "Streptococcus urinary antigen:",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "streptococcus antigen test",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "urinary "
  },
  {
    "name": "ThroatCulture",
    "text": "Throat culture for GAS (group A streptococi).",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "culture",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "throat"
  },
  {
    "name": "ThroatCultureForFusobacteriumNecrophorum",
    "text": "Throat culture for Fusobacterium Necrophorum",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "culture",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "throat"
  },
  {
    "name": "BloodCultureForFusobacteriumNecrophorum",
    "text": "Blood culture for Fusobacterium Necrophorum",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "culture",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "RapiStrepTest",
    "text": "Rapid strep test for GAS (group A streptococi).",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "swab rapid test",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "throat"
  },
  {
    "name": "DeviceBloodCultures",
    "text": "Blood cultures, 1 set from device, and 1 set as peripheral blood culture (both sets for aerobic and anaerobic bacterial cultures).",
    "category": "Microbiology",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "cultures, 1 set from device, and 1 set as peripheral blood culture (both sets for aerobic and anaerobic bacterial cultures)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "blood"
  },
  {
    "name": "RapidFluAntigenTesting",
    "text": "Results of traditional rapid influenza antigen tests (immunoassays) for influenza A and B viral nucleoprotein antigens in respiratory specimens:",
    "category": "Biopsy",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "Negative",
        "value": 2
      },
      {
        "text": "Positive",
        "value": 3
      }
    ],
    "subcategory1": "for influenza (flu)",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": "nasopharyngeal swab"
  },
  {
    "name": "ColonMalignancyOnColonoscopy",
    "text": "Colon malignancy present (found on colonoscopy).",
    "category": "Clinical evaluation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "ProstateMalignancy",
    "text": "Prostate malignancy present",
    "category": "Clinical evaluation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  },
  {
    "name": "BreastMalignancy",
    "text": "Breast malignancy present",
    "category": "Clinical evaluation",
    "type": "categorical",
    "default": 2,
    "choices": [
      {
        "text": "Data unavailable.",
        "value": 1
      },
      {
        "text": "No.",
        "value": 2
      },
      {
        "text": "Yes.",
        "value": 3
      }
    ],
    "subcategory1": "",
    "subcategory2": "",
    "subcategory3": "",
    "subcategory4": ""
  }
]

export default SymptomOutput;