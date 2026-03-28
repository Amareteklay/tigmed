// data/index.js

// life-stages-and-reproductive-health
const { CHILD }                     = require('./topics/life-stages-and-reproductive-health/child-health');
const { MATERNAL }                  = require('./topics/life-stages-and-reproductive-health/maternal-health');
const { CHILD_PEDIATRIC_HEALTH }    = require('./topics/life-stages-and-reproductive-health/child-pediatric-health');
const { MATERNAL_NEONATAL }         = require('./topics/life-stages-and-reproductive-health/maternal-neonatal');
const { ADOLESCENT_HEALTH }         = require('./topics/life-stages-and-reproductive-health/adolescent-health');
const { GERIATRIC_CARE }            = require('./topics/life-stages-and-reproductive-health/geriatric-care');
const { SEXUAL_HEALTH_FERTILITY }   = require('./topics/life-stages-and-reproductive-health/sexual-health-fertility');

// lifestyle-nutrition-and-wellness
const { HYGIENE }                      = require('./topics/lifestyle-nutrition-and-wellness/hygiene');
const { NUTRITION }                    = require('./topics/lifestyle-nutrition-and-wellness/nutrition');
const { DIET_NUTRITION }               = require('./topics/lifestyle-nutrition-and-wellness/diet-nutrition');
const { HYGIENE_SANITATION }           = require('./topics/lifestyle-nutrition-and-wellness/hygiene-sanitation');
const { PHYSICAL_ACTIVITY_FITNESS }    = require('./topics/lifestyle-nutrition-and-wellness/physical-activity-fitness');
const { PREVENTIVE_HEALTH_SCREENING }  = require('./topics/lifestyle-nutrition-and-wellness/preventive-health-screening');
const { SLEEP_WELLNESS }               = require('./topics/lifestyle-nutrition-and-wellness/sleep-wellness');

// mental-health-and-neurology
const { MENTAL_HEALTH }             = require('./topics/mental-health-and-neurology/mental-health');
const { ANXIETY_STRESS_MANAGEMENT } = require('./topics/mental-health-and-neurology/anxiety-stress-management');
const { EATING_DISORDERS }          = require('./topics/mental-health-and-neurology/eating-disorders');
const { MOOD_DISORDERS }            = require('./topics/mental-health-and-neurology/mood-disorders');
const { SLEEP_DISORDERS }           = require('./topics/mental-health-and-neurology/sleep-disorders');
const { SUBSTANCE_USE_DISORDERS }   = require('./topics/mental-health-and-neurology/substance-use-disorders');

// infectious-and-communicable-diseases
const { FEVER_MALARIA }               = require('./topics/infectious-and-communicable-diseases/fever-malaria');
const { TB }                          = require('./topics/infectious-and-communicable-diseases/tb-respiratory');
const { MALARIA_VECTOR_BORNE }        = require('./topics/infectious-and-communicable-diseases/malaria-vector-borne');
const { RESPIRATORY_INFECTIONS }      = require('./topics/infectious-and-communicable-diseases/respiratory-infections');
const { HEPATITIS_VIRAL }             = require('./topics/infectious-and-communicable-diseases/hepatitis-viral');
const { HIV_AIDS_STIS }               = require('./topics/infectious-and-communicable-diseases/hiv-aids-stis');
const { NEGLECTED_TROPICAL_DISEASES } = require('./topics/infectious-and-communicable-diseases/neglected-tropical-diseases');
const { VACCINATION_IMMUNIZATION }    = require('./topics/infectious-and-communicable-diseases/vaccination-immunization');
const { WATERBORNE_DISEASES }         = require('./topics/infectious-and-communicable-diseases/waterborne-diseases');

// emergency-and-specialized-care
const { EMERGENCY }             = require('./topics/emergency-and-specialized-care/emergency');
const { BURNS_FRACTURES }       = require('./topics/emergency-and-specialized-care/burns-fractures');
const { FIRST_AID_CPR }         = require('./topics/emergency-and-specialized-care/first-aid-cpr');
const { ROAD_TRAFFIC_INJURIES } = require('./topics/emergency-and-specialized-care/road-traffic-injuries');
const { SNAKEBITES_POISONING }  = require('./topics/emergency-and-specialized-care/snakebites-poisoning');

// chronic-and-ncds
const { CARDIOVASCULAR_HEALTH }  = require('./topics/chronic-and-ncds/cardiovascular-health');
const { CHRONIC_RESPIRATORY }    = require('./topics/chronic-and-ncds/chronic-respiratory');
const { DIABETES_METABOLIC }     = require('./topics/chronic-and-ncds/diabetes-metabolic');
const { NEUROLOGICAL_DISORDERS } = require('./topics/chronic-and-ncds/neurological-disorders');
const { ONCOLOGY_CANCERS }       = require('./topics/chronic-and-ncds/oncology-cancers');
const { RENAL_KIDNEY_HEALTH }    = require('./topics/chronic-and-ncds/renal-kidney-health');

const PAIRS = [
  // life stages & reproductive health
  ...CHILD,
  ...MATERNAL,
  ...CHILD_PEDIATRIC_HEALTH,
  ...MATERNAL_NEONATAL,
  ...ADOLESCENT_HEALTH,
  ...GERIATRIC_CARE,
  ...SEXUAL_HEALTH_FERTILITY,
  // lifestyle, nutrition & wellness
  ...HYGIENE,
  ...NUTRITION,
  ...DIET_NUTRITION,
  ...HYGIENE_SANITATION,
  ...PHYSICAL_ACTIVITY_FITNESS,
  ...PREVENTIVE_HEALTH_SCREENING,
  ...SLEEP_WELLNESS,
  // mental health & neurology
  ...MENTAL_HEALTH,
  ...ANXIETY_STRESS_MANAGEMENT,
  ...EATING_DISORDERS,
  ...MOOD_DISORDERS,
  ...SLEEP_DISORDERS,
  ...SUBSTANCE_USE_DISORDERS,
  // infectious & communicable diseases
  ...FEVER_MALARIA,
  ...TB,
  ...MALARIA_VECTOR_BORNE,
  ...RESPIRATORY_INFECTIONS,
  ...HEPATITIS_VIRAL,
  ...HIV_AIDS_STIS,
  ...NEGLECTED_TROPICAL_DISEASES,
  ...VACCINATION_IMMUNIZATION,
  ...WATERBORNE_DISEASES,
  // emergency & specialized care
  ...EMERGENCY,
  ...BURNS_FRACTURES,
  ...FIRST_AID_CPR,
  ...ROAD_TRAFFIC_INJURIES,
  ...SNAKEBITES_POISONING,
  // chronic diseases & NCDs
  ...CARDIOVASCULAR_HEALTH,
  ...CHRONIC_RESPIRATORY,
  ...DIABETES_METABOLIC,
  ...NEUROLOGICAL_DISORDERS,
  ...ONCOLOGY_CANCERS,
  ...RENAL_KIDNEY_HEALTH,
].filter(p => p.reviewed);

module.exports = { PAIRS };
