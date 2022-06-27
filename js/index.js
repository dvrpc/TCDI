const thirdPreviousDataSet = [
  {
    YR: 2017,
    MUNICIPALITY: "Bucks County Planning Department",
    PROJECTNAME: "Bristol Township Economic Development Analysis",
    ID: 481,
    AMOUNT: 80000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Chester County Planning Department",
    PROJECTNAME: "Phoenixville Region Multi Modal Transportation Plan",
    ID: 482,
    AMOUNT: 52000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Chester County Planning Department",
    PROJECTNAME: "Brandywine Valley Wayfinding Signage Plan",
    ID: 483,
    AMOUNT: 40000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "East Goshen Township",
    PROJECTNAME: "Paoli Pike Corridor Master Plan",
    ID: 484,
    AMOUNT: 52500,
  },
  {
    YR: 2017,
    MUNICIPALITY: "East Whiteland Township",
    PROJECTNAME: "Route 30 Corridor Study",
    ID: 485,
    AMOUNT: 75000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Phoenixville",
    PROJECTNAME: "Downtown Parking Study",
    ID: 486,
    AMOUNT: 34000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "West Whiteland Township",
    PROJECTNAME: "Pottstown Pike Congestion Mitigation Feasibility Study",
    ID: 487,
    AMOUNT: 25000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Delaware County Planning Department",
    PROJECTNAME: "Downtown Awakening",
    ID: 488,
    AMOUNT: 80000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Media Borough",
    PROJECTNAME: "Updated Economic Development Strategy",
    ID: 489,
    AMOUNT: 56250,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Morton Borough",
    PROJECTNAME: "Morton Connect",
    ID: 490,
    AMOUNT: 36000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Upper Darby Township",
    PROJECTNAME: "Mutli-Modal Modernization of the Garrett Road Corridor",
    ID: 491,
    AMOUNT: 71250,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Abington Township",
    PROJECTNAME: "Walk Park Train",
    ID: 492,
    AMOUNT: 75000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Lansdale Borough",
    PROJECTNAME: "Liberty Bell Trail Alignment Study",
    ID: 493,
    AMOUNT: 28000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Lower Providence",
    PROJECTNAME: "Ridge Pike West Corridor Study",
    ID: 494,
    AMOUNT: 80000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Montgomery County Planning Commission",
    PROJECTNAME: "Bike Montco Plan Development",
    ID: 495,
    AMOUNT: 30000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Upper Dublin Township",
    PROJECTNAME: "Transportation Demand Plan for FWOP",
    ID: 496,
    AMOUNT: 75000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Philadelphia City Planning Commission",
    PROJECTNAME: "Wissahickon Gateway",
    ID: 497,
    AMOUNT: 100000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Office of Transportation & Infrastructure Systems",
    PROJECTNAME: "Where the Sidewalk Gaps",
    ID: 498,
    AMOUNT: 100000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Office of Transportation and Infrastructure Systems",
    PROJECTNAME: "Complete Streets Calculator",
    ID: 499,
    AMOUNT: 80000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Department of Streets, City of Philadelphia",
    PROJECTNAME: "Critical Matchmaking between Vision Zero Research",
    ID: 500,
    AMOUNT: 30000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Burlington County Planning",
    PROJECTNAME: "River Route Circulation",
    ID: 501,
    AMOUNT: 175000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Burlington County",
    PROJECTNAME: "Bridgeboro Redesign (Route 130 Intersecton)",
    ID: 502,
    AMOUNT: 100000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Cherry Hill",
    PROJECTNAME: "Woodcrest Station (TOD) Plan",
    ID: 503,
    AMOUNT: 60000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Camden County",
    PROJECTNAME: "Walter Rand Market Feasbility",
    ID: 504,
    AMOUNT: 100000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Princeton",
    PROJECTNAME: "Princeton Parking",
    ID: 505,
    AMOUNT: 65000,
  },
  {
    YR: 2017,
    MUNICIPALITY: "Trenton",
    PROJECTNAME: "Waterfront Reclamation",
    ID: 506,
    AMOUNT: 100000,
  },
];
// NOTE: the ID's here aare completely arbitrary. The provided file had every "ID": 0 for every entry so I made up a 600+ range for the hover effect to work This applies for currentDataSet too
//const previousDataSet =  [{"YR": 2019, "MUNICIPALITY":"Concord Township","PROJECTNAME":"US 1/US 202 Corridor Pedestrian Improvement Plan","ID":600,"AMOUNT":72000,"PROJ_DESC":"Analyze and create conceptual designs  for multi-modal improvements along the corridors."},{"MUNICIPALITY":"Montgomery County","PROJECTNAME":"Creating Equitable Connections to the Montgomery County Trail System","ID":601,"AMOUNT":75000,"PROJ_DESC":"Create a plan that increases the diversity of users to the county trail system, accessibility,  and provides for a modernized design for all users."},{"MUNICIPALITY":"Multi-Municipal - Collingswood Borough & Haddon Township","PROJECTNAME":"Bicycle and Pedestrian Enhancements Master Plan","ID":602,"AMOUNT":72000,"PROJ_DESC":"Develop a bicycle and pedestrian network that seamlessly links the two communities, focusing on travel to, from, and along Haddon Avenue that will encourage greater usage of bicycles and walking."},{"MUNICIPALITY":"Burlington City","PROJECTNAME":"Downtown Circulation Plan","ID":603,"AMOUNT":50000,"PROJ_DESC":"Update the master plan element to increase  economic opportunities and capitalize on the two light rail stations and proposed residential development with in the City."},{"MUNICIPALITY":"Multi-Municipal - Burlington City, Burlington Township, Mount Holly Township & Westampton Township","PROJECTNAME":"County Route 541 Corridor Study","ID":604,"AMOUNT":150000,"PROJ_DESC":"Prepare a coordinated transportation and circulation plan  for the CR 541 corridor that includes Burlington City, Burlington Township, Westampton Township and Mount Holly Township. "},{"MUNICIPALITY":"Chalfont Borough","PROJECTNAME":"Parking Consolidation and Streetscape Plan","ID":605,"AMOUNT":50000,"PROJ_DESC":"Create a schematic layout for consolidated parking and streetscape plan to encourage revitalization in the downtown."},{"MUNICIPALITY":"Philadelphia","PROJECTNAME":"Central Philadelphia Transportation Analysis Program","ID":606,"AMOUNT":100000,"PROJ_DESC":"Work with key partners to define investment needs for data collection and analysis to inform the City and its partners about steps needed in collecting meaningful data to shape strategic policy and funding decisions that will improve mobility."},{"MUNICIPALITY":"New Garden Township","PROJECTNAME":"Transportation Improvement Plan for the Village of Toughkenamon","ID":607,"AMOUNT":65000,"PROJ_DESC":"Create a transportation plan to reenergize the village with a variety of local commercial establishments,, a diversity of housing options for all ages, with attractive open spaces and streetscapes."},{"MUNICIPALITY":"Camden City","PROJECTNAME":"Connecting Transportation and Land Use Along Haddon Avenue","ID":608,"AMOUNT":100000,"PROJ_DESC":"Improve bike and pedestrian connections with a zoning land use overlay to accommodate freight and home based deliveries to be used to enhance existing and future redevelopment plans along the Medical Mile in Camden City."},{"MUNICIPALITY":"Lawrence Township","PROJECTNAME":"Brunswick Pike Streetscape","ID":609,"AMOUNT":60000,"PROJ_DESC":"Prepare conceptual streetscape plans that enhance pedestrian access and facilitate community meetings to garner support for the revitalization of Brunswick Pike ."},{"MUNICIPALITY":"Chester County","PROJECTNAME":"Active Transportation Municipal Ordinance Inventory and Outreach","ID":610,"AMOUNT":125000,"PROJ_DESC":"Review and identify potential ordinance amendments to increase active transportation throughout the County."},{"MUNICIPALITY":"Merchantville Borough","PROJECTNAME":"Lighting Feasibility Study","ID":611,"AMOUNT":33000,"PROJ_DESC":"Explore the various solar and electric options, types of feasible pedestrian-oriented light fixtures, and design solutions for the various segments of a multi-municipal path."},{"MUNICIPALITY":"Philadelphia","PROJECTNAME":"Vision Zero Pedestrian Safety Study and Action Plan","ID":612,"AMOUNT":100000,"PROJ_DESC":"Continue efforts to identify causes pedestrian crashes, develop priority pedestrian HIN corridors and “pedestrian focus areas, ” and recommend systemic engineering improvements."},{"MUNICIPALITY":"Middletown Township","PROJECTNAME":"Comprehensive Plan Development","ID":613,"AMOUNT":67000,"PROJ_DESC":"Develop a sustainable comprehensive plan that addresses the changing demographics and development pattern of the Township."},{"MUNICIPALITY":"Philadelphia","PROJECTNAME":"North Philadelphia Station Area","ID":614,"AMOUNT":100000,"PROJ_DESC":"Develop a transportation plan that improves the safety, usability, and appearance of the station, connects to the street grid, and encourages better stormwater management practices."},{"MUNICIPALITY":"Multi-Municipal - Hatboro Borough & Upper Moreland Township","PROJECTNAME":"Master Trail Feasibility Plan","ID":615,"AMOUNT":72000,"PROJ_DESC":"Develop a Master Trail Plan to close gaps in existing regional trails, provide transportation alternatives to residents, identify trail spurs to local neighborhoods, and contribute to the economic growth of local businesses."},{"MUNICIPALITY":"Philadelphia","PROJECTNAME":"Complete Streets","ID":616,"AMOUNT":100000,"PROJ_DESC":"Develop conceptual renderings of 3 identified dangerous intersections to enhance the overall communities’ appearance and promote walking and biking."},{"MUNICIPALITY":"Lower Merion Township","PROJECTNAME":"Multi-Modal Strategies and Policies","ID":617,"AMOUNT":52000,"PROJ_DESC":"Review TDM policies as part of ongoing planning efforts to modernize  regulatory and planning documents to address residential transportation impacts."},{"MUNICIPALITY":"Cheltenham Township","PROJECTNAME":"Transportation Impact Study","ID":618,"AMOUNT":100000,"PROJ_DESC":"Develop and adopt a Transportation Impact Fee Ordinance to address impacts from new residential development."},{"MUNICIPALITY":"Gloucester City","PROJECTNAME":"Port Neighborhood Transportation Study","ID":619,"AMOUNT":65000,"PROJ_DESC":"Analyze traffic patterns in the port area and its impact on adjacent residential neighborhoods."},{"MUNICIPALITY":"Pottstown Borough","PROJECTNAME":"Keim Street Gateway Overlay Planning","ID":620,"AMOUNT":32000,"PROJ_DESC":"Create an overlay to increase access to the Schuylkill River Trail, improve the quality of life for the adjacent residential neighborhoods, and enhance the economic performance of the Industrial Center."},{"MUNICIPALITY":"Media Borough","PROJECTNAME":"Traffic Calming Study","ID":621,"AMOUNT":90000,"PROJ_DESC":"Enhance pedestrian and bicycle safety along high speed vehicular routes outside the downtown."},{"MUNICIPALITY":"Multi-Municipal - Mount Laurel Township, Westampton Township & Willingboro Township","PROJECTNAME":"Centerton Road Pedestrian-Bicycle Bridge Feasibility Study","ID":622,"AMOUNT":70000,"PROJ_DESC":"Determine the feasibility of constructing a pedestrian bridge to re-connect the Townships of Willingboro, Westampton, and Mt. Laurel, to provide access to recreational  amenities along the Rancocas Creek."}]
const secondPreviousDataSet = [
  {
    YR: "2019",
    ID: "521",
    COUNTY: "Chester County ",
    MUNICIPALITY: "Chester County",
    AMOUNT: "125000",
    PROJECTNAME:
      "Active Transportation Municipal Ordinance Inventory and Outreach",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "524",
    COUNTY: "Burlington ",
    MUNICIPALITY: "Burlington City",
    AMOUNT: "50000",
    PROJECTNAME: "Downtown Circulation Plan",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "527",
    COUNTY: "Philadelphia",
    MUNICIPALITY: "City of Philadelphia (PCPC)",
    AMOUNT: "100000",
    PROJECTNAME: "Complete Streets",
    PM: "bmastaglio",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "528",
    COUNTY: "Philadelphia",
    MUNICIPALITY: "City of Philadelphia (oTis)",
    AMOUNT: "100000",
    PROJECTNAME: "Central Philadelphia Transportation Analysis Program",
    PM: "abernknopf",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "529",
    COUNTY: "Burlington",
    MUNICIPALITY: "Burlington County Bridge Commission",
    AMOUNT: "150000",
    PROJECTNAME: "County Route 541 Corridor Study",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "530",
    COUNTY: "Camden",
    MUNICIPALITY: "Gloucester City",
    AMOUNT: "65000",
    PROJECTNAME: "Port Neighborhood Transportation Study",
    PM: "mruane",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "531",
    COUNTY: "Camden ",
    MUNICIPALITY: "Collingswood Borough",
    AMOUNT: "72000",
    PROJECTNAME: "Bicycle and Pedestrian Enhancements Master Plan",
    PM: "tstead",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "532",
    COUNTY: "Montgomery",
    MUNICIPALITY: "Montgomery County",
    AMOUNT: "75000",
    PROJECTNAME:
      "Creating Equitable Connections to the Montgomery County Trail System",
    PM: "clinn",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "533",
    COUNTY: "Montgomery County",
    MUNICIPALITY: "Cheltenham Township",
    AMOUNT: "100000",
    PROJECTNAME: "Transportation Impact Study",
    PM: "asvekla",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "537",
    COUNTY: "Mercer County",
    MUNICIPALITY: "Lawrence Township",
    AMOUNT: "60000",
    PROJECTNAME: "Brunswick Pike Streetscape",
    PM: "laxelson",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "538",
    COUNTY: "Philadelphia",
    MUNICIPALITY: "City of Philadelphia (PCPC)",
    AMOUNT: "100000",
    PROJECTNAME: "North Philadelphia Station Area",
    PM: "kmorris",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "540",
    COUNTY: "Montgomery County, PA",
    MUNICIPALITY: "Pottstown Borough",
    AMOUNT: "32000",
    PROJECTNAME: "Keim Street Gateway Overlay Planning",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "541",
    COUNTY: "Bucks",
    MUNICIPALITY: "Middletown Township",
    AMOUNT: "67000",
    PROJECTNAME: "Comprehensive Plan Update",
    PM: "dlombardi",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "542",
    COUNTY: "Chester ",
    MUNICIPALITY: "New Garden Township",
    AMOUNT: "65000",
    PROJECTNAME:
      "Transportation Improvement Plan for the Village of Toughkenamon",
    PM: "abeatty",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "544",
    COUNTY: "Bucks ",
    MUNICIPALITY: "Chalfont Borough",
    AMOUNT: "50000",
    PROJECTNAME: "Parking Consolidation & Streetscape Plan",
    PM: "cboulan",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "545",
    COUNTY: "Montgomery ",
    MUNICIPALITY: "Upper Moreland Township",
    AMOUNT: "72000",
    PROJECTNAME: "Master Trail Plan",
    PM: "mandrews",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "547",
    COUNTY: "Pennsylvania",
    MUNICIPALITY: "City of Philadelphia (oTis)",
    AMOUNT: "100000",
    PROJECTNAME: "Vision Zero Pedestrian Safety Study & Action Plan",
    PM: "kmurphy",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "549",
    COUNTY: "Burlington County",
    MUNICIPALITY: "Burlington County",
    AMOUNT: "70000",
    PROJECTNAME: "Centerton Road Pedestrian-Bicycle Bridge Feasibility Study",
    PM: "slegendre",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "551",
    COUNTY: "Camden County",
    MUNICIPALITY: "Merchantville Borough",
    AMOUNT: "33000",
    PROJECTNAME: "Lighting Feasibility Study",
    PM: "ecompitello",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "552",
    COUNTY: "Delaware ",
    MUNICIPALITY: "Media Borough",
    AMOUNT: "90000",
    PROJECTNAME: "Traffic Calming Study",
    PM: "gkrykewycz",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "553",
    COUNTY: "Camden ",
    MUNICIPALITY: "Camden County",
    AMOUNT: "100000",
    PROJECTNAME: "Connecting Transportation and Land Use Along Haddon Avenue",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "556",
    COUNTY: "Montgomery County",
    MUNICIPALITY: "Lower Merion Township",
    AMOUNT: "52000",
    PROJECTNAME: "Multi-Modal Strategies and Policies",
    PM: "pelkis",
    FILENAME: "",
    GOOGLEID: "",
  },
  {
    YR: "2019",
    ID: "559",
    COUNTY: "Delaware County",
    MUNICIPALITY: "Concord Township",
    AMOUNT: "72000",
    PROJECTNAME: "1/202 Corridor Pedestrian Improvement Plan",
    PM: "kpcilurso",
    FILENAME: "",
    GOOGLEID: "",
  },
];

const previousDataSet = [
  {
    YR: 2021,
    ID: 700,
    MUNICIPALITY: "Bucks County",
    AMOUNT: 80000,
    PROJECTNAME: "Bucks County Pedestrian Safety Enhancements",
  },
  {
    YR: 2021,
    ID: 701,
    MUNICIPALITY: "Bucks County Planning Commission",
    AMOUNT: 60000,
    PROJECTNAME: "Upper Bucks County Area Public Transportation Analysis",
  },
  {
    YR: 2021,
    ID: 702,
    MUNICIPALITY: "Kennett Square Borough",
    AMOUNT: 80000,
    PROJECTNAME: "Kennett Region Micro-Transit Feasibility",
  },
  {
    YR: 2021,
    ID: 703,
    MUNICIPALITY: "Charlestown Township",
    AMOUNT: 64000,
    PROJECTNAME: "Devault Trail Activation Feasibility",
  },
  {
    YR: 2021,
    ID: 704,
    MUNICIPALITY: "Eddystone Borough",
    AMOUNT: 48000,
    PROJECTNAME: "Route 291 Corridor Improvements",
  },
  {
    YR: 2021,
    ID: 705,
    MUNICIPALITY: "Media Borough",
    AMOUNT: 64000,
    PROJECTNAME: "Hybrid Form-Based Code",
  },
  {
    YR: 2021,
    ID: 706,
    MUNICIPALITY: "Lansdowne Borough",
    AMOUNT: 85000,
    PROJECTNAME: "Eastern Delco Bikeway Prioritization",
  },
  {
    YR: 2021,
    ID: 707,
    MUNICIPALITY: "Upper Gwynedd Township",
    AMOUNT: 113000,
    PROJECTNAME: "Advancing the Liberty Bell Trail",
  },
  {
    YR: 2021,
    ID: 708,
    MUNICIPALITY: "Montgomery County",
    AMOUNT: 90000,
    PROJECTNAME: "Cross County Trail Feasibility",
  },
  {
    YR: 2021,
    ID: 709,
    MUNICIPALITY: "Green Lane Borough",
    AMOUNT: 36000,
    PROJECTNAME:
      "Addressing Active Transportation and Trail-End Revitalization",
  },
  {
    YR: 2021,
    ID: 710,
    MUNICIPALITY: "Whitemarsh Township",
    AMOUNT: 80000,
    PROJECTNAME:
      "Multi-Modal Connections between Washington Street and Spring Mill Station",
  },
  {
    YR: 2021,
    ID: 711,
    MUNICIPALITY: "Philadelphia",
    AMOUNT: 90000,
    PROJECTNAME: "North Philadelphia Transit First Corridor",
  },
  {
    YR: 2021,
    ID: 712,
    MUNICIPALITY: "Philadelphia",
    AMOUNT: 85000,
    PROJECTNAME: "Philadelphia Complete Streets Delivery Program",
  },
  {
    YR: 2021,
    ID: 713,
    MUNICIPALITY: "Philadelphia",
    AMOUNT: 60000,
    PROJECTNAME: "Philadelphia Trail and Sidepath Maintenance",
  },
  {
    YR: 2021,
    ID: 714,
    MUNICIPALITY: "Philadelphia",
    AMOUNT: 65000,
    PROJECTNAME: "25th Street Corridor Concepts",
  },
  {
    YR: 2021,
    ID: 715,
    MUNICIPALITY: "Philadelphia",
    AMOUNT: 100000,
    PROJECTNAME: "Imagine Philadelphia Part 2",
  },
  {
    YR: 2021,
    ID: 716,
    MUNICIPALITY: "Bordentown City",
    AMOUNT: 60000,
    PROJECTNAME: "Developing Streetscape and Parking Enhancements",
  },
  {
    YR: 2021,
    ID: 717,
    MUNICIPALITY: "Pemberton Township",
    AMOUNT: 85000,
    PROJECTNAME: "CR 530-CR 687 Corridor Development",
  },
  {
    YR: 2021,
    ID: 718,
    MUNICIPALITY: "Haddonfield Borough",
    AMOUNT: 164000,
    PROJECTNAME: "Mitigating Stormwater Impacts on the Transportation System",
  },
  {
    YR: 2021,
    ID: 719,
    MUNICIPALITY: "Woodbury City",
    AMOUNT: 74000,
    PROJECTNAME: "Redbank Station Bike/Ped Shed Improvements",
  },
  {
    YR: 2021,
    ID: 720,
    MUNICIPALITY: "Elk Township",
    AMOUNT: 77000,
    PROJECTNAME: "Assessing Alternative Transportation",
  },
  {
    YR: 2021,
    ID: 721,
    MUNICIPALITY: "Trenton City",
    AMOUNT: 90000,
    PROJECTNAME: "TOD Strategic Plan",
  },
  {
    YR: 2021,
    ID: 722,
    MUNICIPALITY: "Hightstown Borough",
    AMOUNT: 50000,
    PROJECTNAME: "Redevelopment Area Circulation Concepts",
  },
];

// mapped dataset has a much different shape from data displayed in accordions updating/archiving becomes a pain
const currentDataSet = {
  type: "FeatureCollection",
  features: [
    {
      geometry: {
        type: "Point",
        coordinates: [-75.74873745045772, 39.97306026179467],
      },
      type: "Feature",
      id: 0,
      properties: {
        amt_web: "$60,000",
        yr: 2023,
        map_status: "Mapped at the county level",
        PROJECTNAME: "Public Transportation Plan Update: Phase Two",
        co_name: "Chester",
        AMOUNT: 60000,
        longitude: -75.74873745,
        state: "PA",
        mapped: "No",
        latitude: 39.97306026,
        projectnum: 0,
        MUNICIPALITY: "Chester County Planning Commission",
        ID: 325.0,
        PROJ_DESC:
          "This project seeks to continue the process of updating the Chester County Public Transportation Plan to ensure that the issues, policies, and recommendations outlined in the plan remain relevant and consistent with the Chester County Comprehensive Plan.",
        geography: "County",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.15361444990799, 39.98957830360002],
      },
      type: "Feature",
      id: 1,
      properties: {
        amt_web: "$100,000",
        co_name: "Philadelphia",
        map_status: "Mapped at the county level",
        PROJECTNAME: "Complete Streets Delivery Program: Phase Two",
        mapped: "No",
        MUNICIPALITY: "City of Philadelphia",
        AMOUNT: 100000,
        longitude: -75.15361445,
        ID: 324.0,
        state: "PA",
        yr: 2023,
        latitude: 39.9895783,
        projectnum: 0,
        proj_desc2:
          "transportation-related projects in Philadelphia's public right-of-way.",
        PROJ_DESC:
          "TCDI funds will support the next phase of the Complete Streets Delivery Program. Phase 2 will focus on project delivery to ensure greater conformance with complete street standards and develop a living resource that will guide and govern the design of transportation-related projects in Philadelphia's public right-of-way.",
        geography: "County",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.15354222810537, 39.957310399665566],
      },
      type: "Feature",
      id: 2,
      properties: {
        amt_web: "$100,000",
        co_name: "Philadelphia",
        map_status: "Mapped at the county level",
        PROJECTNAME: "Preliminary Work for the Comprehensive Plan",
        mapped: "No",
        MUNICIPALITY: "City of Philadelphia",
        AMOUNT: 100000,
        longitude: -75.15354223,
        ID: 340.0,
        state: "PA",
        yr: 2023,
        latitude: 39.9573104,
        projectnum: 0,
        proj_desc2:
          "understanding of a changing physical, social, economic, environmental, and technological landscape.",
        PROJ_DESC:
          "These funds will be used to continue the groundwork for the Comprehensive Plan update specifically to help complete the necessary \u2018pre-work\u2019 for a successful, fully engaged, and collaborative comprehensive planning process that will include a shared understanding of a changing physical, social, economic, environmental, and technological landscape.",
        geography: "County",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.15368704710284, 40.021961394485984],
      },
      type: "Feature",
      id: 3,
      properties: {
        amt_web: "$70,000",
        co_name: "Philadelphia",
        map_status: "Mapped as a study area",
        PROJECTNAME: "Neighborhood Bikeways",
        mapped: "No",
        MUNICIPALITY: "City of Philadelphia",
        AMOUNT: 70000,
        longitude: -75.15368705,
        ID: 349.0,
        state: "PA",
        yr: 2023,
        latitude: 40.02196139,
        projectnum: 0,
        proj_desc2:
          "Strawberry Mansion, Lower Germantown, and Fishtown. The three subject neighborhoods selected for the study lack adequate bicycle infrastructure and represent significant gaps in Philadelphia\u2019s bicycle network.",
        PROJ_DESC:
          "The Neighborhood Bikeways Study will explore opportunities to implement neighborhood bikeway infrastructure, which offers a creative approach to bicycle infrastructure for constrained streets, in three Philadelphia neighborhoods:Strawberry Mansion, Lower Germantown, and Fishtown. The three subject neighborhoods selected for the study lack adequate bicycle infrastructure and represent significant gaps in Philadelphia’s bicycle network.",
        geography: "Study Area",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.10045674917511, 39.99159432693845],
      },
      type: "Feature",
      id: 4,
      properties: {
        amt_web: "$100,000",
        co_name: "Philadelphia",
        map_status: "Mapped as a study area",
        PROJECTNAME: "Complete Streets Corridor Study for Aramingo Avenue",
        mapped: "Yes",
        MUNICIPALITY: "City of Philadelphia",
        AMOUNT: 100000,
        longitude: -75.10045675,
        ID: 348.0,
        state: "PA",
        yr: 2023,
        latitude: 39.99159433,
        projectnum: 0,
        proj_desc2:
          "signal coordination, signal timing modifications, multimodal access, safety, and connectivity.",
        PROJ_DESC:
          "This project will\u00a0identify opportunities to demonstrate and advance complete street improvements along a one-mile stretch of Aramingo Avenue between Castor and Allegheny Avenues. The study will evaluate intersection improvements, transit travel times,signal coordination, signal timing modifications, multimodal access, safety, and connectivity.",
        geography: "Study Area",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-74.90628156580124, 40.178542986717446],
      },
      type: "Feature",
      id: 5,
      properties: {
        amt_web: "$85,000",
        co_name: "Bucks",
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "Multimodal Improvement Plan",
        mapped: "No",
        MUNICIPALITY: "Township of Middletown",
        AMOUNT: 85000,
        longitude: -74.90628157,
        ID: 323.0,
        state: "PA",
        yr: 2023,
        latitude: 40.17854299,
        projectnum: 0,
        proj_desc2:
          "improve access to other transportation options (i.e., train stations).",
        PROJ_DESC:
          "TCDI funds will be used to develop a plan for improving multimodal transportation options including assessing viable locations to improve pedestrian facilities (sidewalks, crossings, etc.), add bike lanes, identify opportunities to improve bus stops, and improve access to other transportation options (i.e., train stations).",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-74.93229131970894, 40.22898331596628],
      },
      type: "Feature",
      id: 6,
      properties: {
        amt_web: "$65,000",
        yr: 2023,
        map_status: "Mapped at the municipal level",
        PROJECTNAME:
          "Safety and Walkability Review for Multimodal Improvements",
        co_name: "Bucks",
        AMOUNT: 65000,
        longitude: -74.93229132,
        state: "PA",
        mapped: "No",
        latitude: 40.22898332,
        projectnum: 0,
        MUNICIPALITY: "Newtown Borough",
        ID: 337.0,
        PROJ_DESC:
          "A borough-wide multimodal transportation study will be conducted in order to create a prioritized list of improvements for non-motorized modes of transportation.",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.98003496989413, 39.783970992092065],
      },
      type: "Feature",
      id: 7,
      properties: {
        amt_web: "$100,000",
        co_name: "Chester",
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "SALDO and Zoning Update",
        mapped: "No",
        MUNICIPALITY: "Borough of Oxford",
        AMOUNT: 100000,
        longitude: -75.98003497,
        ID: 338.0,
        state: "PA",
        yr: 2023,
        latitude: 39.78397099,
        projectnum: 0,
        proj_desc2:
          "Borough\u2019s existing street pattern and transportation needs; and maintain the character and pedestrian orientation of Oxford.",
        PROJ_DESC:
          "TCDI funds will be used to prepare the SALDO and Zoning Ordinance in order to improve consistency and better reflect opportunities for new development, redevelopment, and preservation in the Borough; ensure development occurs with consideration of the Borough’s existing street pattern and transportation needs; and maintain the character and pedestrian orientation of Oxford.",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.30610032587897, 39.887504065231546],
      },
      type: "Feature",
      id: 8,
      properties: {
        amt_web: "$125,000",
        co_name: "Delaware",
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "Chester Pike Corridor Multi Modal Improvement Study",
        mapped: "No",
        MUNICIPALITY: "Delaware County TMA",
        AMOUNT: 125000,
        longitude: -75.30610033,
        ID: 329.0,
        state: "PA",
        yr: 2023,
        latitude: 39.88750407,
        projectnum: 0,
        proj_desc2: "the Chester Pike Corridor Improvement Partners (CPCIP).",
        PROJ_DESC:
          "TCDI funds will be used to perform a Multimodal Transportation Study as a strategy to move further away from dependency on automobile travel and create more options for bike, pedestrian and transit usage throughout the entire corridor, as identified by the Chester Pike Corridor Improvement Partners (CPCIP).",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.35486722171571, 39.85007348721717],
      },
      type: "Feature",
      id: 9,
      properties: {
        amt_web: "$150,000",
        yr: 2023,
        map_status: "Mapped as a study area",
        PROJECTNAME: "Route 291 Road Diet Study",
        co_name: "Delaware",
        AMOUNT: 150000,
        longitude: -75.35486722,
        state: "PA",
        mapped: "Yes",
        latitude: 39.85007349,
        projectnum: 0,
        MUNICIPALITY: "Delaware County Planning Department",
        ID: 331.0,
        PROJ_DESC:
          "The study will focus on the portions of Route 291 from Irving Street in Chester City to Darby Creek in Ridley Township to address safety issues that make it difficult to accommodate the preferred corridor for the East Coast Greenway and pedestrians.",
        geography: "Study Area",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.39282569673149, 40.26392626476868],
      },
      type: "Feature",
      id: 10,
      properties: {
        amt_web: "$100,000",
        yr: 2023,
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "Feasibility Study for Walkable Lederach",
        co_name: "Montgomery",
        AMOUNT: 100000,
        longitude: -75.3928257,
        state: "PA",
        mapped: "No",
        latitude: 40.26392626,
        projectnum: 0,
        MUNICIPALITY: "Lower Salford Township",
        ID: 320.0,
        PROJ_DESC:
          "TCDI funds will be used to study how to make the existing infrastructure work more efficiently and safely with a focus on options that put the priority on pedestrian and bicycle safety throughout Lederach.",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.33986037807675, 40.12238374785802],
      },
      type: "Feature",
      id: 11,
      properties: {
        amt_web: "$80,000",
        yr: 2023,
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "Redevelopment Area Transportation Study",
        co_name: "Montgomery",
        AMOUNT: 80000,
        longitude: -75.33986038,
        state: "PA",
        mapped: "No",
        latitude: 40.12238375,
        projectnum: 0,
        MUNICIPALITY: "Municipality of Norristown",
        ID: 332.0,
        PROJ_DESC:
          "TCDI funds will be used to support an expansive transit study of the Norristown Redevelopment Area in order to pursue increased funding for infrastructure improvements and economic development projects in the future.",
        geography: "Municipal",
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-75.64440932340247, 40.2507612277045],
      },
      type: "Feature",
      id: 12,
      properties: {
        amt_web: "$65,000",
        co_name: "Montgomery",
        map_status: "Mapped at the municipal level",
        PROJECTNAME: "Community Mobility Hub Feasibility Study",
        mapped: "No",
        MUNICIPALITY: "Greater Valley Forge TMA",
        AMOUNT: 65000,
        longitude: -75.64440932,
        ID: 343.0,
        state: "PA",
        yr: 2023,
        latitude: 40.25076123,
        projectnum: 0,
        proj_desc2:
          "Montgomery County Community College\u2019s Pottstown Campus. The goal of the study is to provide data that has identified solutions for better connectivity and give students affordable options other than needing to own a car.",
        PROJ_DESC:
          "The GVFTMA defines a mobility hub as places of connectivity where different travel options \u2013 walking, biking, transit, and shared mobility \u2013 come together, and will use these funds to determine the feasibility of a community mobility hub on Montgomery County Community College’s Pottstown Campus. The goal of the study is to provide data that has identified solutions for better connectivity and give students affordable options other than needing to own a car.",
        geography: "Municipal",
      },
    },
  ],
};

// Accordion functionality
const accordion = document.querySelectorAll(".accordion");
for (var i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    // show/hide the accordions on click
    this.classList.toggle("active");

    // toggle the aria-expanded attribute of the accordion button
    let ariaExpandedBool = this.getAttribute("aria-expanded");
    ariaExpandedBool === "false"
      ? (ariaExpandedBool = "true")
      : (ariaExpandedBool = "false");
    this.setAttribute("aria-expanded", ariaExpandedBool);

    // toggle the aria-hidden attribute of the accordion panel
    const panel = this.nextElementSibling;
    let ariaHiddenBool = panel.getAttribute("aria-hidden");
    ariaHiddenBool === "false"
      ? (ariaHiddenBool = "true")
      : (ariaHiddenBool = "false");
    panel.setAttribute("aria-hidden", ariaHiddenBool);

    // show/hide the panel on click
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}

const options = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

const getWebLinks = async (year) => {
  const stream = await fetch(
    `https://www.dvrpc.org/ASP/TCDIdirect/deliverableFileList_new.aspx?year=${year}`,
    options
  );

  let output = {};

  // check if the ID yields a response
  if (stream.ok) {
    const response = await stream.json();
    response.files.forEach((file) => {
      const id = file.properties.project;
      const link = file.webViewLink;

      // format response so that lookup time for the datasets loop is faster (only looping thru response once here, rather than for every dataset obj)
      output[id] = link;
    });
  } else {
    return null;
  }

  return output;
};

const makeTheRest = (props, table) => {
  const newRow = table.insertRow();
  const municipalityColumn = newRow.insertCell();
  const titleColumn = newRow.insertCell();
  const amountColumn = newRow.insertCell();

  const municipality = props["MUNICIPALITY"];
  const title = props["PROJECTNAME"];
  const amount = props["AMOUNT"].toLocaleString();

  municipalityColumn.textContent = municipality;

  amountColumn.textContent = "$" + amount;
  amountColumn.style.textAlign = "right";

  return [title, titleColumn];
};

const populateProjectDetails = function (dataset, tableName) {
  let isCurrent = false;

  // handle the currentDataSet being a geoJSON vs the rest being regular JSONs
  if (tableName === "currentDataSet") {
    dataset = dataset.features;
    isCurrent = dataset[0].properties.yr;
  }

  const table = document.querySelector("#" + tableName);
  const year = isCurrent || dataset[0]["YR"];

  // fill out the awards header
  const awardsHeader = document.querySelector("h2." + tableName);
  awardsHeader.textContent = !isCurrent
    ? "FY " + year + " TCDI AWARDS"
    : "FY " + year + " Pennsylvania TCDI AWARDS";

  // fill out the accordion header & get links where applicable
  let response;
  if (tableName != "currentDataSet") {
    const accordionButton = document.querySelector("." + tableName);
    accordionButton.textContent = "FY " + year;
    response = getWebLinks(year);
  }

  // function to iterate over datasets so that the if(response) on line 130 can be DRY
  const populateListItems = function (response) {
    dataset.forEach(function (project) {
      let link;

      // grab the link from the response OR get the correct project format if iterating over the currentDataSet geoJSON (current data set will never have links b/c no deliverables yet)
      if (response) {
        const id = project["ID"];
        link = response[id] || null;
      } else {
        project = project.properties;
      }

      let [title, titleColumn] = [...makeTheRest(project, table)];

      // add links wherever they exist, otherwise just add text
      if (link) {
        titleColumn.innerHTML =
          "<a href=" + link + " rel='external'>" + title + "</a>";
      } else {
        titleColumn.textContent = title;
      }
    });
  };

  if (response) {
    response.then(function (responseProjects) {
      populateListItems(responseProjects);
    });
  } else {
    populateListItems(null);
  }
};

populateProjectDetails(currentDataSet, "currentDataSet");
populateProjectDetails(previousDataSet, "previousDataSet");
populateProjectDetails(secondPreviousDataSet, "secondPreviousDataSet");
// moved to archived projects 5/12/2022
populateProjectDetails(thirdPreviousDataSet, "thirdPreviousDataSet");

mapboxgl.accessToken =
  "pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA";

const stylesheet = {
  version: 8,
  sources: {
    counties: {
      type: "vector",
      url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    },
  },
  layers: [
    {
      id: "county-fill",
      type: "fill",
      source: "counties",
      "source-layer": "county",
      layout: {},
      paint: {
        "fill-color": "#B6C1C6",
        "fill-opacity": 1,
      },
      filter: ["==", "dvrpc", "Yes"],
    },
    {
      id: "municipality-outline",
      type: "line",
      source: "counties",
      "source-layer": "municipalities",
      paint: {
        "line-width": 0.5,
        "line-color": "#efefef",
      },
    },
    {
      id: "county-outline",
      type: "line",
      source: "counties",
      "source-layer": "county",
      paint: {
        "line-width": 2.5,
        "line-color": "#fff",
      },
      filter: ["==", "dvrpc", "Yes"],
    },
  ],
};

const map = new mapboxgl.Map({
  container: "map",
  style: stylesheet,
  attributionControl: false,
  center: [-75.2273, 40.071],
  minZoom: 7.75,
  maxZoom: 12,
  zoom: 8.82,
});

map.fitBounds([
  [-76.09405517578125, 39.49211914385648],
  [-74.32525634765625, 40.614734298694216],
]);

// define the max and min awards and radii for mapboxGl to consume
const awards = currentDataSet.features.map(function (project) {
  return project.properties.AMOUNT;
});

const maxAward = Math.max.apply(null, awards);
const minAward = Math.min.apply(null, awards);

const maxRadius = 25;
const minRadius = 5;

const award_layer = function (id) {
  return {
    id: id,
    type: "circle",
    source: id,
    paint: {
      "circle-radius": {
        property: "AMOUNT",
        type: "exponential",
        stops: [
          [minAward, minRadius],
          [maxAward, maxRadius],
        ],
      },
      "circle-color": "#6fb8b9",
      "circle-opacity": 0.7,
      "circle-stroke-width": 1.25,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.7,
    },
  };
};

const award_hover = function (id, source) {
  return {
    id: id,
    type: "circle",
    source: source,
    paint: {
      "circle-radius": {
        property: "AMOUNT",
        type: "exponential",
        stops: [
          [minAward, minRadius],
          [maxAward, maxRadius],
        ],
      },
      "circle-color": "#6fb8b9",
      "circle-opacity": 1,
      "circle-stroke-width": 1.5,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 1,
    },
    filter: ["==", "ID", ""],
  };
};

const popupDetails = function (e) {
  new mapboxgl.Popup({
    closebutton: true,
    closeOnClick: true,
  })
    .setLngLat(e.features[0].geometry.coordinates)
    .setHTML(
      "<strong>" +
        e.features[0].properties.PROJECTNAME +
        "</strong>" +
        "<br /><em>Award Amount: </em>$" +
        e.features[0].properties.AMOUNT.toLocaleString() +
        "<hr class='popup-hr' />" +
        e.features[0].properties.PROJ_DESC
    )
    .addTo(map);
};

const legend = document.querySelector("#legend-labels");
const legendSizes = [
  { size: 25, class: "large" },
  { size: 15, class: "medium" },
  { size: 5, class: "small" },
];

const rateOfChange = (maxRadius - minRadius) / (maxAward - minAward);
const radiusAtZero = maxRadius - rateOfChange * maxAward;

const roundfive = function (num) {
  return num % 5 >= 2.5 ? parseInt(num / 5) * 5 + 5 : parseInt(num / 5) * 5;
};

const awardSize = function (circleRadius) {
  let awardVal = (circleRadius - radiusAtZero) / rateOfChange;
  let label = "$" + roundfive(awardVal).toLocaleString();
  return label;
};

legendSizes.forEach(function (circle) {
  let labelText = awardSize(circle.size);
  legend.insertAdjacentHTML(
    "beforeend",
    "<p class='leg-label'" + circle.class + ">" + labelText + "</p>"
  );
});

map.on("load", function () {
  map.addSource("current-year-awards", {
    type: "geojson",
    data: currentDataSet,
  });
  map.addLayer(award_layer("current-year-awards"));
  map.addLayer(award_hover("current-year-hover", "current-year-awards"));

  map.on("click", "current-year-awards", function (e) {
    popupDetails(e);
  });
  map.on("mousemove", "current-year-awards", function (e) {
    map.getCanvas().style.cursor = "pointer";
    map.setFilter("current-year-hover", [
      "==",
      "ID",
      e.features[0].properties["ID"],
    ]);
  });
  map.on("mouseleave", "current-year-awards", function (e) {
    map.getCanvas().style.cursor = "";
    map.setFilter("current-year-hover", ["==", "ID", ""]);
  });
});
