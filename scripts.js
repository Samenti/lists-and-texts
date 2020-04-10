myNames = ['Marton', 'Andras', 'Raznor', 'Samenti', 'Marci']

myNames.forEach(name => {
    $("ul").append("<li id='" + name + "'>" + name + "</li>")
    if (name === 'Raznor') {
        $("#Raznor").css("font-weight", "bold");
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append(
    '<h1>' + additionalBlock.title + '</h1><p>' + additionalBlock.text + '</p>'
)