const loadLessons = () =>{
    
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=> res.json())
    .then((json)=> displayLesson(json.data));
};

const loadLevelWord = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayLevelWord(data.data));
};

const displayLevelWord = (words)=>{
    // 1.get the container and empty
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words.length == 0) {
        wordContainer.innerHTML = `
         <div class="text-center col-span-full rounded py-10 space-y-6 bangla-font">
         <img class="mx-auto" src = "./assets/alert-error.png">  
                <p class=" text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
            </div>
        `
    }

    // 2.get into every lesson
    for (let word of words){
         //  3.create element
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি!"}</h2>
                <p class="font-semibold">Meaning / pronuncaition</p>
                <div class="font-bangla text-2xl font-medium">${word.meaning? word.meaning : "অর্থ পাওয়া যায়নি! "} / ${word.pronunciation ? word.pronunciation :"উচ্চারণ পাওয়া যায়নি!"}</div>
                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button> 
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button> 

             </div>

             </div>
             `;

         // 4.append container
        wordContainer.append(card);

    }

};

const displayLesson = (lessons) => {
    // 1.get the container and empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2.get into every lesson
    for (let lesson of lessons){
         //  3.create element
        //  console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick = "loadLevelWord(${lesson.level_no})" class = "btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Learn - ${lesson.level_no}</button>
        `;

         // 4.append container
        levelContainer.append(btnDiv);

    }
};



loadLessons();