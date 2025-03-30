const ChampawatDis = {

    Lohaghat : [
        {
            name: "Mr. Nitin Singh Bhadauria",
            office: "SDM Office, Lohaghat",
            address: "SDM Office, Lohaghat, Champawat, Uttarakhand",
            number: "8077566822",
            email: "sdmlgt777@gmail.com",
            focusAreas: "Sub-division level administration and governance",
            photo: "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1616843003098.jpg-org",
        },

        {
            name: "C. S. Mewadi",                 
            office: "BDO Office, Lohaghat Block",
            address: "BDO Office, Lohaghat Block, Champawat, Uttarakhand",
            number: "",
            email: "lohaghatbdo@gmail.com",
            focusAreas: "Implementation of development projects at the block level",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaC4Is8KV-LAFSlcsdAYue2DxL0JAkYIZfA&s",
        },

        {
            name: "Human Welfare Society",                              //ngo
            office: "Meena Bazar, Lohaghat",
            address: "Meena Bazar, Lohaghat, Champawat, Uttarakhand, PIN - 262524",
            number: "91-94129 77054",
            email: "humanwelfare98@yahoo.in",
            focusAreas: "Community development, environmental conservation, and HIV/AIDS awareness programs",
            photo: "../images/ngologo.jpg",
        },
    ],

    champawat : [
        {
            name: "Bageshwar",
            office: "District Magistrate Office",
            address: "Collectorate Compound, Srikhand Chaur, Champawat, Uttarakhand, PIN - 262523",
            number: "7895318895",
            email: "dm-chp-ua@nic.in",
            focusAreas: "Overall district administration and governance",
            photo: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/02/24/68c258a2d849e1b3b61f5cb3c2a0effd.jpg?quality=80&zoom=1&ssl=1",
        },

        {
            name: "Shri Navneet Pande",
            office: "SDM Office, Champawat, Uttarakhand",
            address: "Champawat, Uttarakhand",
            number: "7906051294",
            email: "sdm.chp@gmail.com",
            focusAreas: "Sub-division level administration and governance",
            photo: "https://www.vibesofindia.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-09-at-11.22.32-2.jpeg",
        },

        {
            name: "Bhupal Singh Khati",
            office: "BDO Office, Champawat Block",
            address: "BDO Office, Champawat Block, Champawat, Uttarakhand",
            number: "8057589318",
            email: "champawatbdo@gmail.com",
            focusAreas: "Implementation of development projects at the block level",
            photo: "https://theleaderspage.com/wp-content/uploads/2022/02/WhatsApp_Image_2022-02-18_at_16.59.01-removebg-preview.png",
        },

        {
            name: "Parvatiya Phalotpadan Evam Bahudhandiya Sansthan",                       //ngo
            office: "G.I.C. Road, Kanal Gaon, Champawat",
            address: "G.I.C. Road, Kanal Gaon, Champawat, Uttarakhand, PIN - 262523",
            number: "91-94105 02186",
            email: "ppbs.org@gmail.com",
            focusAreas: "Health, rural development, horticulture, and tourism",
            photo: "../images/ngologo.jpg",
        },
    ],

    Pati : [
        {
            name: "Sub-Divisional Magistrate (SDM) Office",
            office: "SDM Office, Pati",
            address: "SDM Office, Pati, Champawat, Uttarakhand",
            number: "7906064087",
            email: "sdmpati16@gmail.com",
            focusAreas: "Sub-division level administration and governance",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CeAhVZn7j9LGRB_ZMkB-_R6-u0rod04egQ&s",
        },

        {
            name: "C. S. Mewadi",
            address: "BDO Office, Pati Block, Champawat, Uttarakhand",
            number: "",
            email: "bdo.pati03@gmail.com",
            focusAreas: "Implementation of development projects at the block level",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NPi3Y78xCe6NCtEvFEY7cYH5khPzYcC38w&s",
        },
    
        {
            name: "Paryavaran Sanrakshan Samiti",                   //ngo
            address: "Paryaran Sanrakshan Samiti, Pati, District Champawat, Uttarakhand, PIN - 262580",
            number: "",
            email: "",
            focusAreas: "",
            photo: "../images/ngologo.jgp",
        },
    ],

    Barakot : [
        {
            name: "Puran Singh Rawat",
            address: "Block Development Officer (BDO)",
            number: "",
            email: "bktbdo@gmail.com",
            focusAreas: "",
            photo: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/188836-bjmririugo-1680778039.jpg",
        }
    ]
}

function addPerson()
{
    let count = 0;
    const result = document.querySelector(".result");
    const errorMessage = document.querySelector(".errorMessage");
    const search = JSON.parse(localStorage.getItem("searchedData"));
    for(const blocks in ChampawatDis)
    {
        if(search === "")
        {
            console.log("empty");
        }
        else if((search.toLowerCase()) === (blocks.toLowerCase()))
        {

            errorMessage.style.display = "none";

            ChampawatDis[blocks].forEach(help => {

                const card = document.createElement("div");
                card.classList.add("card");

                const image = document.createElement("img");
                image.src = help.photo;

                const contentDiv = document.createElement("div");
                contentDiv.classList.add("content");

                const heading = document.createElement("h2");
                heading.innerText = help.name;

                const address = document.createElement("p");
                address.innerText = help.address;

                const area = document.createElement("p");
                area.innerText = blocks.toUpperCase();

                const focusArea = document.createElement("a");
                focusArea.innerText = help.focusAreas;
                focusArea.classList.add("focusarea");

                const phoneIcons = document.createElement("div");
                phoneIcons.classList.add("phoneicons");

                
                const phoneimage = document.createElement("img");
                phoneimage.src = "../images/phoneimg2.png";
                
                const phoneimage2 = document.createElement("img");
                phoneimage2.src = "../images/phoneimg3.png";
                
                const number1 = document.createElement("a");
                number1.href = "tel:"+help.number;
                number1.appendChild(phoneimage);

                const number2 = document.createElement("a");
                number2.href = "tel:"+help.number;
                number2.appendChild(phoneimage2);

                phoneIcons.append(number1, number2);

                contentDiv.append(heading, address, area, focusArea, phoneIcons);

                card.appendChild(image);

                card.appendChild(contentDiv);

                result.appendChild(card);
                
                count++;

                if(count === ChampawatDis[blocks].length)
                {
                    card.style.animation = "none";
                }

            });
        }
        else{
            
        }
    }
    console.log(search);
}

addPerson();