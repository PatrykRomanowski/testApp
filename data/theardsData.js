import Theards from "../classes/theards";

const theardsDataInsideForMetric = new Theards();
const theardsDataInsideForInch = new Theards();
const theardsDataOutsideForMetric = new Theards();
const theardsDataOutsideForInch = new Theards();

////////////////////////////////////////////////////
// addPitch(name, rozmiar, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, D1max, Th)

const theards_M = new Theards();
theards_M.addTheards("M");
theards_M.addSize("M", "M1");
theards_M.addSize("M", "M1.1");
theards_M.addSize("M", "M1.2");
theards_M.addSize("M", "M1.4");
theards_M.addSize("M", "M1.6");
theards_M.addSize("M", "M1.8");
theards_M.addSize("M", "M2");
theards_M.addSize("M", "M2.2");
theards_M.addSize("M", "M2.5");
theards_M.addSize("M", "M3");
theards_M.addSize("M", "M3.5");
theards_M.addSize("M", "M4");
theards_M.addSize("M", "M4.5");
theards_M.addSize("M", "M5");
theards_M.addSize("M", "M6");
theards_M.addSize("M", "M7");
theards_M.addSize("M", "M8");
theards_M.addSize("M", "M9");
theards_M.addSize("M", "M10");
theards_M.addSize("M", "M11");
theards_M.addSize("M", "M12");
theards_M.addSize("M", "M14");
theards_M.addSize("M", "M16");
theards_M.addSize("M", "M18");
theards_M.addSize("M", "M20");
theards_M.addSize("M", "M22");
theards_M.addSize("M", "M24");
theards_M.addSize("M", "M27");
theards_M.addSize("M", "M30");
theards_M.addSize("M", "M33");
theards_M.addSize("M", "M36");
theards_M.addSize("M", "M39");
theards_M.addSize("M", "M42");
theards_M.addSize("M", "M45");
theards_M.addSize("M", "M48");
theards_M.addSize("M", "M52");
theards_M.addSize("M", "M56");
theards_M.addSize("M", "M60");
theards_M.addSize("M", "M64");
theards_M.addSize("M", "M68");


// theards_M.addPitch("M", "M1", "0.25");
theards_M.addPitch("M", "M1", "0.25", 0.750, 1.000, 0.933, 0.838, 0.785, 0.693, 0.63, 0.838, 0.894, 0.729, 0.785, 0.153);
theards_M.addPitch(
    "M",
    "M1.1",
    "0.25",
    0.850,
    1.100,
    1.033,
    0.938,
    0.885,
    0.793,
    0.730,
    0.938,
    0.994,
    0.829,
    0.885,
    0.153
);
theards_M.addPitch(
    "M",
    "M1.2",
    "0.25",
    0.950,
    1.200,
    1.133,
    1.038,
    0.985,
    0.893,
    0.830,
    1.038,
    1.094,
    0.929,
    0.985,
    0.153
);
theards_M.addPitch(
    "M",
    "M1.4",
    "0.3",
    1.100,
    1.400,
    1.325,
    1.205,
    1.149,
    1.032,
    0.964,
    1.205,
    1.265,
    1.075,
    1.142,
    0.184
);
theards_M.addPitch(
    "M",
    "M1.6",
    "0.35",
    1.250,
    1.581,
    1.496,
    1.354,
    1.291,
    1.152,
    1.075,
    1.373,
    1.458,
    1.221,
    1.321,
    0.215
);
theards_M.addPitch(
    "M",
    "M1.8",
    "0.35",
    1.450,
    1.781,
    1.696,
    1.554,
    1.491,
    1.352,
    1.275,
    1.573,
    1.658,
    1.421,
    1.521,
    0.215
);
theards_M.addPitch(
    "M",
    "M2",
    "0.4",
    1.600,
    1.981,
    1.886,
    1.721,
    1.654,
    1.490,
    1.407,
    1.740,
    1.830,
    1.567,
    1.679,
    0.245
);
theards_M.addPitch(
    "M",
    "M2.2",
    "0.45",
    1.750,
    2.180,
    2.080,
    1.888,
    1.817,
    1.628,
    1.540,
    1.908,
    2.003,
    1.713,
    1.838,
    0.276
);
theards_M.addPitch(
    "M",
    "M2.5",
    "0.45",
    2.050,
    2.480,
    2.380,
    2.188,
    2.117,
    1.121,
    1.840,
    2.208,
    2.303,
    2.013,
    2.138,
    0.276
);
theards_M.addPitch(
    "M",
    "M3",
    "0.5",
    2.500,
    2.980,
    2.874,
    2.655,
    2.580,
    2.367,
    2.273,
    2.675,
    2.775,
    2.459,
    2.599,
    0.307
);
theards_M.addPitch(
    "M",
    "M3.5",
    "0.6",
    2.900,
    3.479,
    3.354,
    3.089,
    3.004,
    2.743,
    2.635,
    3.11,
    3.222,
    2.85,
    3.01,
    0.368
);
theards_M.addPitch(
    "M",
    "M4",
    "0.7",
    3.300,
    3.978,
    3.838,
    3.523,
    3.433,
    3.119,
    3.002,
    3.545,
    3.663,
    3.242,
    3.422,
    0.429
);
theards_M.addPitch(
    "M",
    "M4.5",
    "0.75",
    3.750,
    4.478,
    4.338,
    3.991,
    3.901,
    3.558,
    3.439,
    4.013,
    4.131,
    3.688,
    3.878,
    0.46
);
theards_M.addPitch(
    "M",
    "M5",
    "0.8",
    4.200,
    4.976,
    4.826,
    4.456,
    4.361,
    3.995,
    3.869,
    4.48,
    4.605,
    4.134,
    4.334,
    0.491
);
theards_M.addPitch(
    "M",
    "M6",
    "1",
    5.000,
    5.974,
    5.794,
    5.324,
    5.212,
    4.747,
    4.596,
    5.350,
    5.500,
    4.917,
    5.153,
    0.613
);
theards_M.addPitch(
    "M",
    "M7",
    "1",
    6.000,
    6.974,
    6.794,
    6.324,
    6.212,
    5.747,
    5.596,
    6.350,
    6.500,
    5.917,
    6.153,
    0.613
);
theards_M.addPitch(
    "M",
    "M8",
    "1.25",
    6.750,
    7.972,
    7.760,
    7.160,
    7.042,
    6.438,
    6.272,
    7.188,
    7.348,
    6.647,
    6.912,
    0.767
);
theards_M.addPitch(
    "M",
    "M9",
    "1.25",
    7.750,
    8.972,
    8.760,
    8.160,
    8.042,
    7.438,
    7.272,
    8.188,
    8.348,
    7.647,
    7.912,
    0.767
);


theards_M.addPitch(
    "M",
    "M10",
    "1.5",
    8.500,
    9.968,
    9.732,
    8.994,
    8.862,
    8.128,
    7.938,
    9.026,
    9.206,
    8.376,
    8.676,
    0.920
);
theards_M.addPitch(
    "M",
    "M11",
    "1.5",
    9.500,
    10.968,
    10.732,
    9.994,
    9.862,
    9.128,
    8.938,
    10.026,
    10.206,
    9.376,
    9.676,
    0.920
);
theards_M.addPitch(
    "M",
    "M12",
    "1.75",
    10.200,
    11.966,
    11.701,
    10.829,
    10.679,
    9.819,
    9.602,
    10.863,
    11.063,
    10.106,
    10.441,
    1.074
);
theards_M.addPitch(
    "M",
    "M14",
    "2",
    12.000,
    13.962,
    13.682,
    12.663,
    12.503,
    11.508,
    11.271,
    12.701,
    12.913,
    11.835,
    12.210,
    1.227
);
theards_M.addPitch(
    "M",
    "M16",
    "2",
    14.000,
    15.962,
    15.682,
    14.663,
    14.503,
    13.508,
    13.271,
    14.701,
    14.913,
    13.835,
    14.210,
    1.227
);
theards_M.addPitch(
    "M",
    "M18",
    "2.5",
    15.500,
    17.958,
    17.623,
    16.334,
    16.164,
    14.891,
    14.625,
    16.376,
    16.600,
    15.294,
    15.744,
    1.534
);
theards_M.addPitch(
    "M",
    "M20",
    "2.5",
    17.500,
    19.958,
    19.623,
    18.334,
    18.164,
    16.891,
    16.625,
    18.376,
    18.600,
    17.294,
    17.744,
    1.534
);
theards_M.addPitch(
    "M",
    "M22",
    "2.5",
    19.500,
    21.958,
    21.623,
    20.334,
    20.164,
    18.891,
    18.625,
    20.376,
    20.600,
    19.294,
    19.744,
    1.534
);
theards_M.addPitch(
    "M",
    "M24",
    "3",
    21.000,
    23.952,
    23.577,
    22.003,
    21.803,
    20.271,
    19.955,
    22.051,
    22.316,
    20.752,
    21.252,
    1.840
);
theards_M.addPitch(
    "M",
    "M27",
    "3",
    24.000,
    26.952,
    26.577,
    25.003,
    24.803,
    23.271,
    22.955,
    25.051,
    25.316,
    23.752,
    24.252,
    1.84
);
theards_M.addPitch("M", "M30", "3.5", 26.500, 29.947, 29.522, 27.674, 27.462, 25.653, 25.306, 27, 727, 28.007, 26.211, 26.771);
theards_M.addPitch("M", "M33", "3.5", 29.500, 32.947, 32.522, 30.674, 30.462, 28.653, 28.306, 30.727, 31.007, 29.211, 29.771);
theards_M.addPitch("M", "M36", "4.0", 32.000, 35.940, 35.465, 33.342, 33.118, 31.033, 30.655, 33.402, 33.702, 31.670, 32.270);
theards_M.addPitch("M", "M39", "4.0", 35.000, 38.940, 38.465, 36.342, 36.118, 34.033, 33.655, 36.402, 36.702, 34.670, 35.270);
theards_M.addPitch("M", "M42", "4.5", 37.500, 41.937, 41.437, 39.014, 38.778, 36.416, 36.007, 39.077, 39.392, 37.129, 37.799);
theards_M.addPitch("M", "M45", "4.5", 40.500, 44.937, 44.437, 42.014, 41.778, 39.416, 39.007, 42.077, 42.392, 40.129, 40.799);
theards_M.addPitch("M", "M48", "5.0", 43.000, 47.929, 47.399, 44.681, 44.431, 41.795, 41.352, 44.752, 45.087, 42.587, 43.297);
theards_M.addPitch("M", "M52", "5.0", 47.000, 51.929, 51.399, 48.681, 48.431, 45.795, 45.352, 48.752, 49.087, 46.587, 47.297);
theards_M.addPitch("M", "M56", "5.5", 50.500, 55.924, 55.365, 52.353, 52.088, 49.177, 48.700, 52.428, 52.783, 50.046, 50.796);
theards_M.addPitch("M", "M60", "5.5", 54.500, 59.924, 59.365, 56.353, 56.088, 53.177, 52.700, 56.428, 56.783, 54.046, 54.796);
theards_M.addPitch("M", "M64", "6.0", 58.000, 63.920, 63.320, 60.023, 59.743, 56.559, 56.048, 60.103, 60.478, 57.505, 58.305);
theards_M.addPitch("M", "M68", "6.0", 62.000, 67.920, 67.320, 64.023, 63.743, 60.559, 60.048, 64.103, 64.478, 61.505, 62.305);


///////////////////////////////////////////////////

theardsDataInsideForMetric.addTheards("M");
theardsDataInsideForMetric.addTheards("G");
theardsDataInsideForMetric.addTheards("MT");
theardsDataInsideForMetric.addSize("M", "M10");
theardsDataInsideForMetric.addSize("M", "M12");
theardsDataInsideForMetric.addSize("G", "G1/8");
theardsDataInsideForMetric.addSize("MT", "M10");
theardsDataInsideForMetric.addPitch("M", "M12", "2.0", 10.5, 10.35, 10.65);
theardsDataInsideForMetric.addPitch("M", "M12", "2.2", 10.3, 10.15, 10.45);
theardsDataInsideForMetric.addPitch("M", "M12", "2.5", 10.1, 9.95, 10.25);
theardsDataInsideForMetric.addPitch("M", "M10", "1.5", 8.5, 8.35, 8.65);
theardsDataInsideForMetric.addPitch("G", "G1/8", "11W", 8.5, 8.35, 8.65);
theardsDataInsideForMetric.addPitch("MT", "M10", "1.5", 8.5, 8.35, 8.65);

theardsDataOutsideForMetric.addTheards("M");
theardsDataOutsideForMetric.addTheards("G");
theardsDataOutsideForMetric.addTheards("MT");
theardsDataOutsideForMetric.addSize("M", "M2");
theardsDataOutsideForMetric.addSize("M", "M4");
theardsDataOutsideForMetric.addSize("G", "G1/8");
theardsDataOutsideForMetric.addSize("MT", "M10");
theardsDataOutsideForMetric.addPitch("M", "M2", "0.250", 1.8, 1.75, 1.85);
theardsDataOutsideForMetric.addPitch("M", "M2", "0.3", 1.7, 1.6, 1.8);
theardsDataOutsideForMetric.addPitch("M", "M2", "2.5", 10.1, 9.95, 10.25);
theardsDataOutsideForMetric.addPitch("M", "M4", "1.5", 8.5, 8.35, 8.65);
theardsDataOutsideForMetric.addPitch("G", "G1/8", "11W", 8.5, 8.35, 8.65);
theardsDataOutsideForMetric.addPitch("MT", "M10", "1.5", 8.5, 8.35, 8.65);

export {
    theardsDataInsideForMetric,
    theardsDataOutsideForMetric,
    theardsDataInsideForInch,
    theardsDataOutsideForInch,
    theards_M
};