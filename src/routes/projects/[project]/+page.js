/** @type {import('./$types').PageLoad} */

import {error} from '@sveltejs/kit';

export function load({ params }) {
    if (params.project === "Prouse"){
        return{
            project: {
                title: "Prouse – the computer mouse",
                role: "My responsibilities in the project lie in the following areas: - Scribble - Market Research - Corporate Design - Packaging. The whole project is elaborated in more detail below.",
                description: "Prouse was a university project created for a Design, Process, and Prototyping class. The task required students to complete the design process from ideation to prototype in one semester. As a four-person team, we decided to create a computer mouse attachment for individuals with special needs so they could even utilize their impaired hand as a supporting and facilitating element in their daily work routine.",
                process: "one two three",
                results: "This and that",

            }     
    };
            
    } else if (params.project === "Unicorns"){
        return{
            project: {
                title: "Data Exploration – Unicorns",
                role: "The whole documentation of the project was done in Observable (unfortunately it is only available in German) and the data exploration in Python and Tableau. In teams of two, my responsibilities lay in the following areas: - Data preparation - Data exploration - Scribbling - Sankey Chart - World map - Bubble Chart",
                description: "This project is based on the lecture Information Visualization within the masters program in Human-Centered Computing at FH Hagenberg. The task was to explore and visualize a dataset in a useful and scientific approach while taking into account design principles of data visualization.",
                data: "The dataset used was retrieved from kaggle on April 2nd 2022. It contains data about unicorns, describing the demographics of 1035 different startups that have a valuation of at least $1 trillion and are about to go public. There are 13 features described: Company, Valuation, Date Joined (JoinedYear), Country, City, Industry, Select Investors, Founded Year, Total Raised, Financial State, Investors Count, Deal Terms, Portfolio Exits. After having a first look at the data table, the data was prepared and cleaned for the exploration, which reduced the whole dataset to 976 unicorns and 10 features, which were considered for the following steps.",
                process: "Exploration. For the exploration of the Unicorn dataset, Python was utilized. The first step was to incorporate a wordcloud to explore features and their values. The percentage of each industry over all listed unicorns is then shown in a pie chart. The association between a unicorn's worth and either its firm name, city, or nation is finally depicted in three bar charts.",
                results: "This and that",
            }
        }
    } else if (params.project === "Portfoliowebsite"){
        return{
            project: {
                title: "Portfolio Website",
                content: "This and that",
            }
        }
    }

    throw error(404, 'Sry, this page was not found');
}