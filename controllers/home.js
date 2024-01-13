const getHome = (req, res) => {
    const name = "John Doe"; // Replace with the name you want to display
    res.send(`Hello, ${name}!`);
};

module.exports = {
    getHome,
};