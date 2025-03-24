const data = [
    {
        district: "",
        block: "",
        name: "नेहा शर्मा",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "महिला कल्याण अफ़सर",
        photo: "",
        phoneNumber: "8791947585",
        WANumber: "",
        address: "",
    },
    {
        district: "आगरा",
        block: "सढोली कदीम",
        name: "बेबी रानी मौर्य",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "केबिनेट मन्त्री, महिला कल्याण बाल विकास एवं पुष्टाहार, उत्तर प्रदेश सरकार",
        photo: "https://mahilakalyan.up.nic.in/Baby_Rani_Maurya.jpeg",
        phoneNumber: "0522-2288532",
        WANumber: "9876543210",
        address: "निदेशालय महिला कल्याण जवाहर भवन, अशोक मार्ग लखनऊ, उत्तर प्रदेश",
    },
    {
        district: "अलीगढ़",
        block: "मुज़फ़्फ़राबाद",
        name: "श्रीमती प्रतिभा शुक्ला",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "राज्य मंत्री महिला कल्याण बाल विकास एवं पुष्टाहार",
        photo: "https://mahilakalyan.up.nic.in/PrtibhaShukla.png",
        phoneNumber: "9876543211",
        WANumber: "9876543211",
        address: "ग्राम पंचायत कार्यालय, मुजफ्फराबाद, सहारनपुर",
    },
    {
        district: "अम्बेडकर नगर",
        block: "पुंवारका",
        name: "सुनीता रानी",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "आपातकालीन संपर्क अधिकारी (सरकारी)",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNj1A8jWVRvxws_Zw3Rn6KYDzEYIqtINtYQ&s",
        phoneNumber: "9876543212",
        WANumber: "9876543212",
        address: "पंचायत भवन, पुवरका, सहारनपुर",
    },
    {
        district: "अमेठी",
        block: "बलियाखेड़ी",
        name: "राहुल अग्रवाल",
        type: "सामाजिक कार्यकर्ता",
        gender: " Male",
        position: "सामुदायिक सहयोगी (सामाजिक)",
        photo: "https://media.istockphoto.com/id/1356281872/vector/happy-people-on-the-hand-care-logo.jpg?s=612x612&w=0&k=20&c=ebVD4uTDg-h6pta7AbJEVki32E_gVwsK1AkxvwjBXMA=",
        phoneNumber: "9876543213",
        WANumber: "9876543213",
        address: "पंचायत भवन, बलिया खेडी, सहारनपुर",
    },
    {
        district: "अमरोहा (ज्योतिबा फुले नगर)",
        block: "नानौता",
        name: "रचना पांडे",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "सुरक्षा प्रतिक्रिया समन्वयक (सरकारी)",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNj1A8jWVRvxws_Zw3Rn6KYDzEYIqtINtYQ&s",
        phoneNumber: "9876543214",
        WANumber: "9876543214",
        address: "तहसील परिसर, ननौता, सहारनपुर",
    },
    {
        district: "औरैया",
        block: "देवबंद",
        name: "निधि टंडन",
        type: "सरकारी अधिकारी",
        gender: "Female",
        position: "महिला सुरक्षा अधिकारी (सरकारी)",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNj1A8jWVRvxws_Zw3Rn6KYDzEYIqtINtYQ&s",
        phoneNumber: "9876543215",
        WANumber: "9876543215",
        address: "ब्लॉक ऑफिस, देवबंद, सहारनपुर",
    },
    {
        district: "आजमगढ़",
        block: "रामपुर",
        name: "अरुणा ठाकुर",
        type: "सामाजिक कार्यकर्ता",
        gender: "Female",
        position: "महिला हेल्पलाइन समन्वयक (सामाजिक)",
        photo: "https://media.istockphoto.com/id/1356281872/vector/happy-people-on-the-hand-care-logo.jpg?s=612x612&w=0&k=20&c=ebVD4uTDg-h6pta7AbJEVki32E_gVwsK1AkxvwjBXMA=",
        phoneNumber: "9876543216",
        WANumber: "9876543216",
        address: "ग्राम पंचायत कार्यालय, रामपुर मनिहारन, सहारनपुर",
    },
    {
        district: "बागपत",
        block: "नागल",
        name: "श्वेता सक्सेना",
        type: "NGO",
        gender: "Female",
        position: "महिला अधिकार कार्यकर्ता (NGO)",
        photo: "https://www.shutterstock.com/image-vector/ngo-earth-planet-hands-palm-260nw-1867730668.jpg",
        phoneNumber: "9876543217",
        WANumber: "9876543217",
        address: "ब्लॉक ऑफिस, नागल, सहारनपुर",
    },
    {
        district: "बहराइच",
        block: "नकुड़",
        name: "पूजा शर्मा",
        type: "NGO",
        gender: "Female",
        position: "महिला सशक्तिकरण कार्यकर्ता (NGO",
        photo: "https://www.shutterstock.com/image-vector/ngo-earth-planet-hands-palm-260nw-1867730668.jpg",
        phoneNumber: "9876543218",
        WANumber: "9876543218",
        address: "पुलिस चौकी, नकुड़, सहारनपुर",
    },
    {
        district: "बांदा",
        block: "सहारनपुर",
        name: "राजीव चौधरी",
        type: "सरकारी अधिकारी",
        gender: "Male",
        position: "जिला संरक्षण अधिकारी (सरकारी)",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNj1A8jWVRvxws_Zw3Rn6KYDzEYIqtINtYQ&s",
        phoneNumber: "9876543221",
        WANumber: "9876543221",
        address: "जिला कार्यालय, सहारनपुर",
    },
]

const onlyDistricts = [
    "बाराबंकी",
    "बरेली",
    "बस्ती",
    "भदोही (संत रविदास नगर)",
    "बिजनौर",
    "बुलंदशहर",
    "चंदौली",
    "चित्रकूट",
    "देवरिया",
    "एटा",
    "इटावा",
    "फैजाबाद (अयोध्या)",
    "फर्रुखाबाद",
    "फतेहपुर",
    "फिरोजाबाद",
    "गौतम बुद्ध नगर (नोएडा)",
    "गाजियाबाद",
    "गाजीपुर",
    "गोंडा",
    "गोरखपुर",
    "हमीरपुर",
    "हापुड़",
    "हरदोई",
    "हाथरस",
    "जालौन",
    "जौनपुर",
    "झांसी",
    "कन्नौज",
    "कानपुर देहात",
    "कानपुर नगर",
    "कासगंज",
    "कौशांबी",
    "कुशीनगर",
    "लखीमपुर खीरी",
    "ललितपुर",
    "लखनऊ",
    "महाराजगंज",
    "महोबा",
    "मैनपुरी",
    "मथुरा",
    "मऊ",
    "मेरठ",
    "मिर्जापुर",
    "मुरादाबाद",
    "मुजफ्फरनगर",
    "पीलीभीत",
    "प्रतापगढ़",
    "रायबरेली",
    "रामपुर",
    "सहारनपुर",
    "संभल (भीम नगर)",
    "संत कबीर नगर",
    "शाहजहांपुर",
    "शामली",
    "श्रावस्ती",
    "सिद्धार्थनगर",
    "सीतापुर",
    "सोनभद्र",
    "सुल्तानपुर",
    "उन्नाव",
    "वाराणसी",
]

function addPerson()
{
    const search = document.querySelector(".inputbox").value;
    const result = document.querySelector(".result");
    result.innerHTML = "";
    data.forEach((person) =>{
        if(search === "")
        {
            const message = document.querySelector(".notingEntered");
            message.style.display= "block";
        }
        else if(search === person.block)
        {
            showHelp(person);
        }
    })
}

function showHelp(help)
{
    console.log(help);
    const result = document.querySelector(".result");
    const phoneIcons = document.createElement("div");
    const card = document.createElement("div");
    const content = document.createElement("div");
    let personImage = document.createElement("img");
    let personName = document.createElement("h2");
    let position = document.createElement("p");
    let location = document.createElement("p");
    let firstNumber = document.createElement("a");
    let secondNumber = document.createElement("a");
    let firstNumberImage = document.createElement("img");
    let secondNumberImage = document.createElement("img");

    personImage.src = help.photo;
    personName.textContent = help.name;
    position.textContent = help.position;
    location.textContent = help.type;
    firstNumberImage.src = "images/phoneimg2.png";
    secondNumberImage.src = "images/phoneimg3.png";
    firstNumber.appendChild(firstNumberImage);
    secondNumber.appendChild(secondNumberImage);
    firstNumber.href = "tel:"+help.phoneNumber;
    secondNumber.href = "tel:"+help.WANumber;
    phoneIcons.append(firstNumber, secondNumber);
    content.append(personName, position, location, phoneIcons);
    card.append(personImage, content);
    result.appendChild(card);
    
    content.classList.add("content");
    phoneIcons.classList.add("phoneicons");
    card.classList.add("card");
    result.classList.add("result");

}