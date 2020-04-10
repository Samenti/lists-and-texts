myNames = ['Marton', 'Andras', 'Raznor', 'Samenti', 'Marci']

myNames.forEach(name => {
    $("ul").append("<li id='" + name + "'>" + name + "</li>")
    if (name === 'Raznor') {
        $("#Raznor").css("font-weight", "bold");
    }
});