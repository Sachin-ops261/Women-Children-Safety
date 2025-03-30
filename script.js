function searchButton(event)
{
    const searchedData = document.getElementById("block").value.trim();
    if(searchedData === "")
    {
        event.preventDefault();
        alert("Please enter a block first.");
    }
    localStorage.setItem("searchedData", JSON.stringify(searchedData));
}