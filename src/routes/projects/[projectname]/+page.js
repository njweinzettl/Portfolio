export function load({ params }) {
    if (params.slug === "Prouse"){
        return{
            title: "Prouse – the computer mouse",
            content: "This and that",
        };
    } else if (params.slug === "Information Visualisation"){
        return{
            title: "Information Visualisation",
            content: "This and that",
        }
    }
}