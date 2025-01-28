/*
 * 
 * Author: Subir Sekhar
 * Co-Author: P. K. Jana
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": " In large impulse generators, the spark gaps are generally",
            "a": [
                {"option": "Sphere gaps", "correct": false},
                {"option": " Hemispherical gaps", "correct": false},
                {"option": "Square gaps", "correct": false},
                {"option": " Either (a) or (b)", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " In a multistage impulse generator, for producing very high voltages, a bank of capacitors is",
            "a": [
                {"option": "Charged in parallel and then discharged in series", "correct": true},
                {"option": " Charged in series and then discharged in parallel", "correct": false},
                {"option": "Charged in parallel and then discharged in parallel only", "correct": false},
                {"option": " Charged in series and then discharged in series only", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Failure during switching impulse tests are can be determined by ",
            "a": [
                {"option": " Visible in oscillograms", "correct": false},
                {"option": " Loud noise produced", "correct": false},
                {"option": " External flashovers", "correct": false},
                {"option": "All of these", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 4
            "q": "Impulse testing of transformers is done using ",
            "a": [
                {"option": " Full wave standard impulse", "correct": false},
                {"option": "Chopped wave standard impulse", "correct": false},
                {"option": "Half wave standard impulse", "correct": false},
                {"option": "Only (a) and (b)", "correct": true},
                {"option": "None of these", "correct": false}// no comma here
            ],
          "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 5
            "q": " For voltage measurements, the gap which gives highest accuracy is ",
            "a": [
                {"option": "Field gaps", "correct": false},
                {"option": "Sphere gaps", "correct": true},
                {"option": "Rod gaps", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 6
            "q": " Field in case of rod gaps and sphere gaps are ",
            "a": [
                {"option": "Uniform, uniform ", "correct": false},
                {"option": "Uniform, non-uniform", "correct": false},
                {"option": " Non-uniform, uniform", "correct": true},
                {"option": "Non-uniform, non-uniform", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        }
     /*   {// Question 7
            "q": " Failure during switching impulse tests are can be determined by: ",
            "a": [
                {"option": "Visible in oscillograms", "correct": false},
                {"option": " Loud noise produced", "correct": false},
                {"option": "External flashovers", "correct": false},
                {"option": "All of these", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 8
            "q": "The sparkover voltage:",
            "a": [
                {"option": "Increases with humidity", "correct": true},
                {"option": " decreases with the partial pressure of water vapour in air", "correct": false},
                {"option": "Humidity effect decreases with the size of spheres", "correct": false},
                {"option": "Humidity is minimum for uniform field gaps", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 9
            "q": "Impulse voltages are characterized by:",
            "a": [
                {"option": "polarity", "correct": false},
                {"option": "time of half the peak value", "correct": true},
                {"option": "peak value", "correct": false},                
                {"option": "all of the above", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 10
            "q": "Which of the following technique/method is-used for the measurements of ac high frequency voltages ?",
            "a": [
                {"option": "Resistance potential divider", "correct": false},
                {"option": "Peak voltmeter", "correct": true},
                {"option": "Series resistance micro ammeter", "correct": false},
                {"option": "Any of the above", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
}// no comma here */
    ]
};