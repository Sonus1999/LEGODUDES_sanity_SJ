export const reviews = {
    title: "Anmeldelser",
    name: "reviews",
    type: "object",
    fields: [

        {
            title: "Navn",
            name: "reviewer",
            type: "string",
        },
        {
            title: "Vudering",
            name: "rating",
            type: "number"
        },
        {
            title: "Kommentar",
            name: "comment",
            type: "text"
        }
    ]
}