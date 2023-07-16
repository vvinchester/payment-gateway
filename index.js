

var call = setInterval( () => {
    var content = document.getElementById("con");
    var i = Math.floor( Math.random() * (quotes.length));
    content.innerHTML = quotes[i];
}, 3050);
 
var quotes = [       
    "“”No one has ever become poor by giving.”- Anne FrankGiving",
    "“The greatest use of life is to spend it for something that will outlast it.”- William James",
    "“You have not lived today until you have done something for someone who can never repay you.” - John Bunyan",
    "“It's not how much we give but how much love we put into giving.”- Mother Teresa",
    "“The best way to find yourself is to lose yourself in the service of others.”- Mahatma Gandhi",
    "“We rise by lifting others.”- Robert Ingersoll"
]