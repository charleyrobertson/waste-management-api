var express = require('express');
var router = express.Router();

var postcodeWasteInformation = [
{
  "postcode": "ML74LH",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84344, "lng": -3.87520},
  "bincolours": ["Grey ", "Blue ", "Green", "Brown "],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "qrcode": "https://i.postimg.cc/qq9r08PM/frame.png",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LJ",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84358, "lng": -3.87641},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LL",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84349, "lng": -3.87832},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LN",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84292, "lng": -3.87831},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LP",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84092, "lng": -3.88474},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LR",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84405, "lng": -3.87245},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LS",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84449, "lng": -3.86952},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LT",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84580, "lng": -3.86484},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LU",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84420, "lng": -3.86933},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LW",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84285, "lng": -3.87752},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74LX",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84342, "lng": -3.87241},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NA",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84193, "lng": -3.87310},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NB",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84242, "lng": -3.87135},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74ND",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84327, "lng": -3.87029},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NE",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.843356, "lng": -3.86840},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NF",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84206, "lng": -3.86942},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NG",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84294, "lng": -3.87023},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NH",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84159, "lng": -3.87497},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NJ",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84214, "lng": -3.87460},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NQ",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84159, "lng": -3.87309},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NL",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84199, "lng": -3.87871},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],

},
{
  "postcode": "ML74NN",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84120, "lng": -3.87560},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
{
  "postcode": "ML74NP",
  "catchmentarea": "North Lanarkshire",
  "location": {"lat": 55.84098, "lng": -3.87676},
  "bincolours": ["Grey", "Blue", "Green", "Brown"],
  "bins": [
    {"bincolour": "Grey",
     "description": "General Waste",
     "daysbetween": 21,
     "accepteditems": ["Polystyrene", "Polythene", "Carrier bags", "Plastic bags", "Tissues", "Napkins", 
     "Animal waste", "Animal litter", "Animal bedding", "Soiled food containers", "Oil", "Fat", "Cigarettes", "Broken crockery", "Cotton buds", "Cotton wool", "Contents of hoover", "Sweet papers", "Crisp packets"],
    },
    {"bincolour": "Green",
    "description": "Plastic, Glass, Metal and Cartons Waste",
    "daysbetween": 21,
     "accepteditems": ["Metal cans", "Metal tins", "Washed food cartons", "Washed drink cartons", "Clean plastic containers (including the lids)",
      "Empty aerosol cans", "Clean tin foil and tin trays", "Plastic spray bottles (with spray function removed)"],
    },
    {"bincolour": "Blue",
    "description": "Paper Waste",
    "daysbetween": 21,
     "accepteditems": ["Paper", "Phone books", "Catalogues", "Greeting cards (with any decorations removed)", "Cereal boxes", "Corregated cardboard"],
    },
    {"bincolour": "Brown",
    "description": "Garden and Food Waste",
    "daysbetween": 14,
     "accepteditems": ["Leaves", "Greenery", "Grass cuttings", "Hedges", "Plants", "Soil", "Raw and cooked food", "Eggs and their shells",
    "Food waste", "Pet food", "Twigs", "Branches"],
    },
  ],
},
]


var recyclingCentres = [
  {
    "postcode": "ML69RY",
    "name": "Airdrie Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.861330, "lng": -3.965830},
  },
  {
    "postcode": "ML75DX",
    "name": "Shotts Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.818004, "lng": -3.797332},
  },
  {
    "postcode": "G673EH",
    "name": "Cumbernauld Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.968030, "lng": -3.961670},
  },
  {
    "postcode": "ML41RZ",
    "name": "Bellshill Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.822960, "lng": -4.015750},
  },
  {
    "postcode": "ML52QJ",
    "name": "Coatbridge Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.871870, "lng": -4.035440},
  },
  {
    "postcode": "ML20JG",
    "name": "Wishaw Recycling Centre",
    "catchmentarea": "North Lanarkshire",
    "location": {"lat": 55.771430, "lng": -3.948930},
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/postcode-waste-information', function(req, res) { 
  postcodeWasteInformation.length==0 ? res.status(404): res.status(200);
  res.send(postcodeWasteInformation);
})

router.get('/postcode-waste-information/:postcode', function(req, res) { 
  var selectedpostcode = postcodeWasteInformation.filter(function(postcodeWasteInfo) {
    return postcodeWasteInfo.postcode == req.params["postcode"];
  });
  selectedpostcode.length==0 ? res.status(404): res.status(200);
  res.send(selectedpostcode);
})

router.get('/recycling-centres', function(req, res) { 
  recyclingCentres.length==0 ? res.status(404): res.status(200);
  res.send(recyclingCentres);
})

module.exports = router;
