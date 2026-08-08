/* ==========================================
   Nyaya Logical Debate Evaluation System
   database.js
==========================================*/

// ---------- Default Users ----------

const defaultUsers = [
    {
        id: 1,
        name: "Administrator",
        username: "admin",
        password: "admin123"
    }
];

// ---------- Initialize Local Storage ----------

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
}

if (!localStorage.getItem("debates")) {
    localStorage.setItem("debates", JSON.stringify([]));
}

if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", "");
}

// ---------- Database Object ----------

const Database = {

    // ==============================
    // USER FUNCTIONS
    // ==============================

    getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    },

    saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    },

    addUser(user) {

        let users = this.getUsers();

        user.id = Date.now();

        users.push(user);

        this.saveUsers(users);
    },

    login(username, password) {

        let users = this.getUsers();

        let user = users.find(u =>
            u.username === username &&
            u.password === password
        );

        if (user) {

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            return true;
        }

        return false;
    },

    logout() {

        localStorage.removeItem("currentUser");

    },

    getCurrentUser() {

        return JSON.parse(
            localStorage.getItem("currentUser")
        );

    },

    // ==============================
    // DEBATE FUNCTIONS
    // ==============================

    getDebates() {

        return JSON.parse(
            localStorage.getItem("debates")
        ) || [];

    },

    saveDebates(debates) {

        localStorage.setItem(
            "debates",
            JSON.stringify(debates)
        );

    },

    addDebate(debate) {

        let debates = this.getDebates();

        debate.id = Date.now();

        debate.date = new Date().toLocaleString();

        debates.push(debate);

        this.saveDebates(debates);

    },

    getUserDebates(username) {

        let debates = this.getDebates();

        return debates.filter(d =>
            d.username === username
        );

    }

};

const defaultDebates = [

{

topic:"Social media improves communication",

claim:"Social media always improves communication.",
reason:"Because people can connect instantly through online platforms.",
example:"Many people use social media to share messages.",
application:"This applies to users communicating online.",
conclusion:"Therefore, social media improves communication.",
score:75,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Smoking affects health",

claim:"Smoking damages human health.",
reason:"Because tobacco contains harmful substances.",
example:"Many smokers suffer from respiratory problems.",
application:"This applies to people who consume tobacco products.",
conclusion:"Therefore, smoking negatively affects health.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Money creates happiness",

claim:"Money always creates happiness.",
reason:"Because money can provide comfort.",
example:"Rich people can buy expensive things.",
application:"This applies to some situations involving financial security.",
conclusion:"Therefore, money creates happiness.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Online education effectiveness",

claim:"Online education can support learning.",
reason:"Because digital platforms provide educational resources.",
example:"Students attend online classes from different locations.",
application:"This applies to learners using online resources.",
conclusion:"Therefore, online education can be effective.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Mobile phones are harmful",

claim:"Mobile phones are completely harmful.",
reason:"Because excessive usage can create problems.",
example:"Some people waste time using phones.",
application:"This applies only to excessive users.",
conclusion:"Therefore, mobile phones are harmful.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Artificial intelligence replaces humans",

claim:"AI will replace every human job.",
reason:"Because AI performs many tasks automatically.",
example:"AI systems perform repetitive work.",
application:"This applies to some job categories.",
conclusion:"Therefore, AI will replace all humans.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Books preserve knowledge",

claim:"Books help preserve knowledge.",
reason:"Because information can be recorded and stored.",
example:"Libraries maintain thousands of books.",
application:"This applies to educational resources.",
conclusion:"Therefore, books preserve knowledge.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Fast food is unhealthy",

claim:"Fast food can negatively affect health.",
reason:"Because it often contains excessive fats and sugars.",
example:"Frequent fast food consumption may cause health issues.",
application:"This applies to people consuming unhealthy diets.",
conclusion:"Therefore, excessive fast food is unhealthy.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Internet provides knowledge",

claim:"Internet provides useful knowledge.",
reason:"Because it contains educational information.",
example:"Students use websites for research.",
application:"This applies to responsible internet users.",
conclusion:"Therefore, internet provides knowledge.",
score:75,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Robots are intelligent",

claim:"Robots have human intelligence.",
reason:"Because robots can perform programmed tasks.",
example:"Robots can complete industrial activities.",
application:"This applies to machine capabilities.",
conclusion:"Therefore, robots are intelligent like humans.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["False Comparison"]

},

{

topic:"Sports develop discipline",

claim:"Sports develop discipline.",
reason:"Because sports require regular practice and rules.",
example:"Athletes follow strict training schedules.",
application:"This applies to people participating in sports.",
conclusion:"Therefore, sports encourage discipline.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Climate change is serious",

claim:"Climate change is a serious issue.",
reason:"Because environmental changes affect ecosystems.",
example:"Rising temperatures affect weather patterns.",
application:"This applies globally.",
conclusion:"Therefore, climate change requires attention.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Video games improve skills",

claim:"All video games improve intelligence.",
reason:"Because games require thinking.",
example:"Some strategy games improve problem solving.",
application:"This applies only to certain games.",
conclusion:"Therefore, all games improve intelligence.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Public transport reduces pollution",

claim:"Public transport helps reduce pollution.",
reason:"Because fewer vehicles reduce emissions.",
example:"Buses carry many passengers together.",
application:"This applies to cities using public transport.",
conclusion:"Therefore, public transport reduces pollution.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Fame guarantees success",

claim:"Famous people are always successful.",
reason:"Because popularity creates recognition.",
example:"Celebrities receive public attention.",
application:"This applies only to some individuals.",
conclusion:"Therefore, fame guarantees success.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Learning languages improves communication",

claim:"Learning languages improves communication ability.",
reason:"Because people can interact with more communities.",
example:"Multilingual people communicate internationally.",
application:"This applies to language learners.",
conclusion:"Therefore, learning languages improves communication.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Money solves every problem",

claim:"Money solves every human problem.",
reason:"Because money provides resources.",
example:"Money can buy many services.",
application:"This applies only to financial problems.",
conclusion:"Therefore, money solves every problem.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Democracy gives people power",

claim:"Democracy allows citizens to participate in governance.",
reason:"Because citizens can vote and express opinions.",
example:"Elections allow people to choose leaders.",
application:"This applies to democratic systems.",
conclusion:"Therefore, democracy gives people political power.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Advertising influences decisions",

claim:"Advertising can influence consumer decisions.",
reason:"Because advertisements provide information about products.",
example:"People choose products after seeing advertisements.",
application:"This applies to marketing situations.",
conclusion:"Therefore, advertising influences decisions.",
score:75,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All technology is harmful",

claim:"Every technology creates harm.",
reason:"Because some technologies have disadvantages.",
example:"Some devices cause dependency.",
application:"This applies only to certain technologies.",
conclusion:"Therefore, all technology is harmful.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Kindness improves society",

claim:"Kindness improves social relationships.",
reason:"Because kindness creates cooperation.",
example:"Helping others builds trust.",
application:"This applies to human interactions.",
conclusion:"Therefore, kindness improves society.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Exams measure knowledge",

claim:"Exams measure student knowledge.",
reason:"Because exams test understanding of subjects.",
example:"Students answer questions to demonstrate learning.",
application:"This applies to formal education systems.",
conclusion:"Therefore, exams measure knowledge.",
score:75,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Luck determines success",

claim:"Success depends only on luck.",
reason:"Because some people succeed unexpectedly.",
example:"Some individuals achieve success quickly.",
application:"This applies only to certain cases.",
conclusion:"Therefore, luck determines all success.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Cause"]

},

{

topic:"Traditional knowledge is valuable",

claim:"Traditional knowledge has importance.",
reason:"Because it contains experiences from previous generations.",
example:"Ayurvedic practices use traditional knowledge.",
application:"This applies to cultural knowledge systems.",
conclusion:"Therefore, traditional knowledge is valuable.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Artificial intelligence improves productivity",

claim:"Artificial intelligence can increase productivity.",
reason:"Because AI can automate repetitive tasks.",
example:"Businesses use AI tools to complete tasks faster.",
application:"This applies to workplaces using AI technology.",
conclusion:"Therefore, AI improves productivity.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All machines are dangerous",

claim:"Every machine is dangerous.",
reason:"Because some machines can cause accidents.",
example:"Industrial machines may injure workers if misused.",
application:"This applies only to unsafe machine usage.",
conclusion:"Therefore, all machines are dangerous.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Meditation improves focus",

claim:"Meditation improves concentration.",
reason:"Because meditation trains mental awareness.",
example:"Students practicing meditation show improved focus.",
application:"This applies to regular meditation practitioners.",
conclusion:"Therefore, meditation improves focus.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Technology saves time",

claim:"Technology helps save time.",
reason:"Because automated systems complete tasks quickly.",
example:"Online banking reduces time required for transactions.",
application:"This applies to digital services.",
conclusion:"Therefore, technology saves time.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All advertisements are misleading",

claim:"Every advertisement is false.",
reason:"Because some advertisements exaggerate products.",
example:"Some companies make unrealistic claims.",
application:"This applies only to dishonest advertisements.",
conclusion:"Therefore, all advertisements are misleading.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Libraries are outdated",

claim:"Libraries are no longer useful.",
reason:"Because digital information is available online.",
example:"Students search information on the internet.",
application:"This applies to some modern learning methods.",
conclusion:"Therefore, libraries are outdated.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["False Comparison"]

},

{

topic:"Knowledge creates power",

claim:"Knowledge gives people power.",
reason:"Because knowledge helps in decision making.",
example:"Educated people solve problems effectively.",
application:"This applies to individuals gaining knowledge.",
conclusion:"Therefore, knowledge creates power.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Animals deserve protection",

claim:"Animals should be protected.",
reason:"Because animals are important parts of ecosystems.",
example:"Wildlife conservation protects endangered species.",
application:"This applies to environmental protection efforts.",
conclusion:"Therefore, animals deserve protection.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Online shopping is always better",

claim:"Online shopping is always better than physical shopping.",
reason:"Because products can be purchased from home.",
example:"People buy products using online platforms.",
application:"This applies only to some shopping situations.",
conclusion:"Therefore, online shopping is always better.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Education removes ignorance",

claim:"Education reduces ignorance.",
reason:"Because education provides knowledge and awareness.",
example:"Educated people understand social issues better.",
application:"This applies to learning communities.",
conclusion:"Therefore, education removes ignorance.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Exercise increases energy",

claim:"Physical exercise increases energy levels.",
reason:"Because exercise improves body strength.",
example:"Athletes maintain energy through training.",
application:"This applies to people exercising regularly.",
conclusion:"Therefore, exercise increases energy.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All social media users are addicted",

claim:"Everyone using social media is addicted.",
reason:"Because social media can consume time.",
example:"Some people spend excessive hours online.",
application:"This applies only to excessive users.",
conclusion:"Therefore, all social media users are addicted.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Nature provides resources",

claim:"Nature provides resources required by humans.",
reason:"Because humans depend on natural materials.",
example:"Water, minerals, and forests support human life.",
application:"This applies to human societies.",
conclusion:"Therefore, nature provides essential resources.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Mobile phones support education",

claim:"Mobile phones can support learning.",
reason:"Because educational applications provide information.",
example:"Students use phones for online courses.",
application:"This applies to educational technology users.",
conclusion:"Therefore, mobile phones support education.",
score:75,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Success requires hard work",

claim:"Hard work contributes to success.",
reason:"Because consistent effort improves performance.",
example:"Athletes succeed through regular training.",
application:"This applies to goal-oriented individuals.",
conclusion:"Therefore, hard work contributes to success.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Weather affects agriculture",

claim:"Weather conditions influence farming.",
reason:"Because crops depend on climate conditions.",
example:"Drought affects crop production.",
application:"This applies to agricultural activities.",
conclusion:"Therefore, weather affects agriculture.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All rich people are happy",

claim:"Every wealthy person is happy.",
reason:"Because money provides comfort.",
example:"Rich people can afford luxury.",
application:"This applies only to financial situations.",
conclusion:"Therefore, wealth guarantees happiness.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Research improves understanding",

claim:"Research increases understanding.",
reason:"Because research discovers new information.",
example:"Scientific studies explain natural phenomena.",
application:"This applies to academic fields.",
conclusion:"Therefore, research improves understanding.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Clean energy helps future generations",

claim:"Clean energy benefits future generations.",
reason:"Because it reduces environmental damage.",
example:"Solar power reduces fossil fuel dependency.",
application:"This applies to sustainable development.",
conclusion:"Therefore, clean energy helps future generations.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Competition improves performance",

claim:"Healthy competition improves performance.",
reason:"Because competition motivates improvement.",
example:"Students work harder during competitions.",
application:"This applies to constructive competition.",
conclusion:"Therefore, competition improves performance.",
score:75,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All change is bad",

claim:"Every change creates negative results.",
reason:"Because some changes create difficulties.",
example:"New systems may initially create problems.",
application:"This applies only to certain situations.",
conclusion:"Therefore, all change is bad.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Cultural heritage should be preserved",

claim:"Cultural heritage needs protection.",
reason:"Because it represents historical knowledge.",
example:"Ancient monuments preserve cultural history.",
application:"This applies to societies protecting traditions.",
conclusion:"Therefore, cultural heritage should be preserved.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Sleep improves memory",

claim:"Good sleep improves memory.",
reason:"Because rest helps the brain process information.",
example:"Students remember lessons better after proper sleep.",
application:"This applies to people maintaining healthy sleep.",
conclusion:"Therefore, sleep improves memory.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All advertisements are useful",

claim:"Every advertisement provides useful information.",
reason:"Because advertisements describe products.",
example:"Some advertisements explain product features.",
application:"This applies only to accurate advertisements.",
conclusion:"Therefore, all advertisements are useful.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Science improves human life",
claim:"Science improves human life.",
reason:"Because scientific discoveries solve practical problems.",
example:"Medical science helps treat diseases.",
application:"This applies to societies using scientific knowledge.",
conclusion:"Therefore, science improves human life.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All technology reduces human ability",
claim:"Technology makes humans less capable.",
reason:"Because people depend on machines.",
example:"Some people rely heavily on calculators.",
application:"This applies only to excessive dependence.",
conclusion:"Therefore, technology reduces human ability.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Communication skills are important",
claim:"Communication skills are necessary.",
reason:"Because communication helps people share ideas.",
example:"Good communication improves teamwork.",
application:"This applies to personal and professional life.",
conclusion:"Therefore, communication skills are important.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Animals can feel emotions",
claim:"Animals experience emotions.",
reason:"Because animals show behavioral responses.",
example:"Pets show happiness and fear.",
application:"This applies to many animal species.",
conclusion:"Therefore, animals can feel emotions.",
score:75,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All students learn equally",
claim:"Every student learns at the same speed.",
reason:"Because all students receive education.",
example:"Students attend the same classroom.",
application:"This ignores individual differences.",
conclusion:"Therefore, all students learn equally.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Innovation creates progress",
claim:"Innovation helps society progress.",
reason:"Because new ideas improve existing systems.",
example:"New technologies solve human problems.",
application:"This applies to innovative societies.",
conclusion:"Therefore, innovation creates progress.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Food quality affects health",
claim:"Food quality influences health.",
reason:"Because nutrition affects body functions.",
example:"Balanced diets improve physical condition.",
application:"This applies to people choosing food habits.",
conclusion:"Therefore, food quality affects health.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All traditions are correct",
claim:"Every tradition is correct.",
reason:"Because traditions are followed by people.",
example:"Many communities follow traditions.",
application:"This does not apply to every tradition.",
conclusion:"Therefore, all traditions are correct.",
score:25,
pramana:"Shabda (Testimony)",
fallacies:["False Generalization"]

},

{

topic:"Planning improves success",
claim:"Planning increases chances of success.",
reason:"Because planning provides direction.",
example:"Businesses create plans before projects.",
application:"This applies to organized activities.",
conclusion:"Therefore, planning improves success.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Knowledge prevents mistakes",
claim:"Knowledge helps prevent mistakes.",
reason:"Because understanding improves decisions.",
example:"Experienced people avoid repeated errors.",
application:"This applies to decision-making situations.",
conclusion:"Therefore, knowledge reduces mistakes.",
score:75,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All inventions are beneficial",
claim:"Every invention benefits humanity.",
reason:"Because inventions solve problems.",
example:"Some inventions improve communication.",
application:"This applies only to useful inventions.",
conclusion:"Therefore, every invention is beneficial.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Agriculture supports civilization",
claim:"Agriculture supports human civilization.",
reason:"Because agriculture provides food resources.",
example:"Farming communities produce food.",
application:"This applies to societies depending on farming.",
conclusion:"Therefore, agriculture supports civilization.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All mistakes are failures",
claim:"Every mistake means failure.",
reason:"Because mistakes produce negative outcomes.",
example:"People sometimes fail after mistakes.",
application:"This ignores learning from mistakes.",
conclusion:"Therefore, mistakes are failures.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Friendship improves happiness",
claim:"Friendship increases happiness.",
reason:"Because social relationships provide emotional support.",
example:"Friends help each other during difficulties.",
application:"This applies to healthy relationships.",
conclusion:"Therefore, friendship improves happiness.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Travel increases knowledge",
claim:"Travel increases understanding of the world.",
reason:"Because people experience different cultures.",
example:"Travelers learn about new societies.",
application:"This applies to educational travel.",
conclusion:"Therefore, travel increases knowledge.",
score:75,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All online information is true",
claim:"Every online information source is reliable.",
reason:"Because information is available online.",
example:"Many websites provide information.",
application:"This ignores misinformation.",
conclusion:"Therefore, all online information is true.",
score:0,
pramana:"Shabda (Testimony)",
fallacies:["False Assumption"]

},

{

topic:"Rules maintain order",
claim:"Rules help maintain social order.",
reason:"Because rules guide human behavior.",
example:"Traffic rules prevent accidents.",
application:"This applies to organized societies.",
conclusion:"Therefore, rules maintain order.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Creativity solves problems",
claim:"Creativity helps solve problems.",
reason:"Because creative thinking produces new solutions.",
example:"Inventors create solutions through creativity.",
application:"This applies to problem-solving situations.",
conclusion:"Therefore, creativity helps solve problems.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All risks should be avoided",
claim:"Every risk should be avoided.",
reason:"Because risks may create problems.",
example:"Some people avoid uncertain situations.",
application:"This ignores useful opportunities.",
conclusion:"Therefore, all risks should be avoided.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Public awareness improves society",
claim:"Public awareness improves social conditions.",
reason:"Because informed people make better decisions.",
example:"Awareness campaigns improve health practices.",
application:"This applies to communities.",
conclusion:"Therefore, awareness improves society.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"Learning from experience is valuable",
claim:"Experience improves understanding.",
reason:"Because experience provides practical knowledge.",
example:"Professionals improve through years of work.",
application:"This applies to skill development.",
conclusion:"Therefore, experience is valuable.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All advertisements increase sales",
claim:"Every advertisement increases sales.",
reason:"Because advertisements promote products.",
example:"Companies advertise their products.",
application:"This applies only when advertisements are effective.",
conclusion:"Therefore, advertisements always increase sales.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["False Cause"]

},

{

topic:"Environmental education is important",
claim:"Environmental education creates awareness.",
reason:"Because it teaches conservation methods.",
example:"Schools teach students about nature protection.",
application:"This applies to educational institutions.",
conclusion:"Therefore, environmental education is important.",
score:100,
pramana:"Shabda (Testimony)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All leaders are successful",
claim:"Every leader becomes successful.",
reason:"Because leaders guide people.",
example:"Successful leaders influence society.",
application:"This applies only to effective leaders.",
conclusion:"Therefore, all leaders are successful.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Digital learning expands education",
claim:"Digital learning increases access to education.",
reason:"Because online platforms allow learning from different locations.",
example:"Students attend online courses from home.",
application:"This applies to learners using digital resources.",
conclusion:"Therefore, digital learning expands education.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All digital devices cause addiction",
claim:"Every digital device causes addiction.",
reason:"Because people spend much time using devices.",
example:"Some users spend excessive hours on phones.",
application:"This applies only to uncontrolled usage.",
conclusion:"Therefore, all digital devices cause addiction.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Patience improves decision making",
claim:"Patience helps people make better decisions.",
reason:"Because careful thinking reduces mistakes.",
example:"Patient people analyze situations before acting.",
application:"This applies to important decisions.",
conclusion:"Therefore, patience improves decision making.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All failures are negative",
claim:"Failure always produces negative results.",
reason:"Because failure means not achieving goals.",
example:"Some people feel disappointed after failure.",
application:"This ignores learning opportunities.",
conclusion:"Therefore, failure is always negative.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Sports maintain fitness",
claim:"Sports help maintain physical fitness.",
reason:"Because physical activity strengthens the body.",
example:"Athletes maintain fitness through training.",
application:"This applies to people participating in sports.",
conclusion:"Therefore, sports maintain fitness.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All books contain correct information",
claim:"Every book provides accurate information.",
reason:"Because books are written resources.",
example:"Educational books contain useful knowledge.",
application:"This applies only to reliable books.",
conclusion:"Therefore, all books are correct.",
score:50,
pramana:"Shabda (Testimony)",
fallacies:["Overgeneralization"]

},

{

topic:"Cooperation improves society",
claim:"Cooperation helps society develop.",
reason:"Because people working together solve problems.",
example:"Communities cooperate during emergencies.",
application:"This applies to social activities.",
conclusion:"Therefore, cooperation improves society.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All rules limit freedom",
claim:"Every rule reduces freedom.",
reason:"Because rules create restrictions.",
example:"Traffic rules restrict driving behavior.",
application:"This ignores the benefits of rules.",
conclusion:"Therefore, all rules limit freedom.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["False Assumption"]

},

{

topic:"Healthy habits increase lifespan",
claim:"Healthy habits improve lifespan.",
reason:"Because good habits reduce health risks.",
example:"Regular exercise and balanced food improve health.",
application:"This applies to people maintaining healthy lifestyles.",
conclusion:"Therefore, healthy habits increase lifespan.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All opinions are facts",
claim:"Every opinion represents truth.",
reason:"Because people believe their opinions.",
example:"Different people have different views.",
application:"This confuses opinions with evidence.",
conclusion:"Therefore, all opinions are facts.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["False Equivalence"]

},

{

topic:"Research needs evidence",
claim:"Research requires evidence.",
reason:"Because evidence supports conclusions.",
example:"Scientists use experiments to verify results.",
application:"This applies to scientific studies.",
conclusion:"Therefore, research needs evidence.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All inventions harm nature",
claim:"Every invention damages the environment.",
reason:"Because some inventions create pollution.",
example:"Factories can produce waste.",
application:"This applies only to harmful inventions.",
conclusion:"Therefore, all inventions harm nature.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Listening improves communication",
claim:"Listening improves communication.",
reason:"Because understanding others requires attention.",
example:"Good listeners avoid misunderstandings.",
application:"This applies to conversations.",
conclusion:"Therefore, listening improves communication.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All advertisements manipulate people",
claim:"Every advertisement manipulates consumers.",
reason:"Because advertisements influence choices.",
example:"Marketing affects buying decisions.",
application:"This applies only to some advertisements.",
conclusion:"Therefore, all advertisements manipulate people.",
score:50,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Trees prevent soil erosion",
claim:"Trees help prevent soil erosion.",
reason:"Because roots hold soil together.",
example:"Forests reduce soil loss during rainfall.",
application:"This applies to areas with vegetation.",
conclusion:"Therefore, trees prevent soil erosion.",
score:100,
pramana:"Pratyaksha (Observation)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All knowledge comes from books",
claim:"Books are the only source of knowledge.",
reason:"Because books contain information.",
example:"Students learn from textbooks.",
application:"This ignores other learning sources.",
conclusion:"Therefore, all knowledge comes from books.",
score:25,
pramana:"Shabda (Testimony)",
fallacies:["False Assumption"]

},

{

topic:"Innovation improves technology",
claim:"Innovation develops better technology.",
reason:"Because new ideas improve existing systems.",
example:"Modern devices result from innovation.",
application:"This applies to technological development.",
conclusion:"Therefore, innovation improves technology.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All competition creates conflict",
claim:"Competition always creates conflict.",
reason:"Because competitors try to win.",
example:"Some competitions create disagreements.",
application:"This ignores healthy competition.",
conclusion:"Therefore, competition creates conflict.",
score:25,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Self discipline improves life",
claim:"Self discipline improves personal growth.",
reason:"Because discipline creates consistent actions.",
example:"Disciplined students achieve goals.",
application:"This applies to personal development.",
conclusion:"Therefore, self discipline improves life.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All news sources are reliable",
claim:"Every news source provides truth.",
reason:"Because news reports information.",
example:"Many newspapers report events.",
application:"This applies only to trustworthy sources.",
conclusion:"Therefore, all news sources are reliable.",
score:50,
pramana:"Shabda (Testimony)",
fallacies:["Overgeneralization"]

},

{

topic:"Respect creates harmony",
claim:"Respect improves relationships.",
reason:"Because respect creates understanding.",
example:"Respectful communities have cooperation.",
application:"This applies to social interactions.",
conclusion:"Therefore, respect creates harmony.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All changes are harmful",
claim:"Every change produces negative effects.",
reason:"Because change creates uncertainty.",
example:"New systems may create difficulties.",
application:"This ignores positive changes.",
conclusion:"Therefore, all changes are harmful.",
score:0,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

},

{

topic:"Memory improves through practice",
claim:"Practice strengthens memory.",
reason:"Because repetition reinforces learning.",
example:"Students remember information by revision.",
application:"This applies to learning activities.",
conclusion:"Therefore, practice improves memory.",
score:100,
pramana:"Anumana (Inference)",
fallacies:["No Major Fallacy Detected"]

},

{

topic:"All technology is progress",
claim:"Every technology creates progress.",
reason:"Because technology introduces improvements.",
example:"Some technologies solve problems.",
application:"This applies only to beneficial technologies.",
conclusion:"Therefore, all technology creates progress.",
score:75,
pramana:"Anumana (Inference)",
fallacies:["Overgeneralization"]

}

];