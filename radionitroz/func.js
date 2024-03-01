document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Find the target section
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    
   
        const toggleButton = document.getElementById("toggleButton");
        const hiddenContent = document.querySelector(".hidden-content");
        
        toggleButton.addEventListener("click", function() {
            if (hiddenContent.style.display === "none" ) {
                hiddenContent.style.display = "block";
                toggleButton.textContent = "Read Less";
            } else {
                hiddenContent.style.display = "none";
                imgPlusCon.style.display = "none";
                toggleButton.textContent = "Read More";
            }
        });
    
    
    let events = [
        {"eventimage":"https://radionitroz.in/static/media/jukebox.98e9ff7c.jpg","eventtitle":"<h3>RN JUKEBOX</h3>","overview":"<p>RN JUKEBOX is offline platform for fun activities in AAROHAN where people participate in huge numbers with extravagant enthusiasm. We have in store for participants The Spinning Wheel, Paper Dance, Open Mic, Tug of War and many more. Students always look up to RADIO NITroz in college fests, for their fun events.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/EVENTS%20IN%20RECSTACY.1f5f8103.jpg","eventtitle":"<h3>EVENTS IN RECSTACY</h3>","overview":"<p>Recstacy is the annual cultural festival of NIT Durgapur with a lots of amazing events. In Recstacy - one of the biggest fests of Eastern India, Radio NITroz - The Official Radio Club of NIT Durgapur also has some funfilled events full of ecstacy and extravaganza to make the college days more memorable. The different events arranged by Radio NITroz in the Recstacy are DILEMMAS, DARE YOU, PAPER DANCE- Dance like no ones is watching, HUNAR - Unleash the X factor within you, MR AND MRS NITDGP which are filled with a lot of fun and enjoyment.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/kholedil.2411a1e7.jpg","eventtitle":"<h3>KHOL-E-DIL</h3>","overview":"<p>KHOL-E-DIL gives everyone a platform where they can confess any feelings that was untold due to this stupid pandemic, any unsaid goodbyes, any unsaid sorry if they by chance hurt someone, just anything they want that person to know. This event is still going on our Official Facebook page of Radio NITroz with 450+ entries!</p>"},
        {"eventimage":"https://radionitroz.in/static/media/matkifod.f39c1710.jpg","eventtitle":"<h3>MATKI FOD</h3>","overview":"<p>MATKI FOD was a fun and interactive event conducted on the auspicious occasion of the festival of Janmashtami with a thought to relive the famous ‘matki fod’ event held nationwide in the college campus on Janmashtami with participation of around 300+ college students.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/NEXUS_VERSE.6326236d.jpg","eventtitle":"<h3>NEXUS VERSE</h3>","overview":"<p>Growing up Jigsaw puzzle has often been a funand jubilant pastimewe all had. The little pieces interlocking and nonchalantly painting the infinite. The Nexus Verse is an upgradedand maverick version of a trivia event whereenven the simplest entity is entangled into alabyrinth of a puzzle. This event had an overwhelming participation of 200+ pepole.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/memerantine.58468233.jpg","eventtitle":"<h3>MEME-RAN-TINE</h3>","overview":"<p>Memes are one of our most vital survival tools during this quarantine as they are hilarious and savage at the same time so Radio NITroz conduct an event MEME-RAN-TINE, where participants had a chance to showoff their awesome sense of humor by making memes on given list of places in the college. The event was very successful with 80+ participation.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/moviemystics.986c44df.jpg","eventtitle":"<h3>MOVIE MYSTICS</h3>","overview":"<p>MOVIE MYSTICS is one of the fun events of NIT Durgapur which is held by our club where participants hunt for the correct film Or web series by solving the exciting and interesting challenging riddles as well as figuring out the connection between picture puzzles. It's an online event, which goes on for consecutive 2 days on our Facebook page and it's got a huge success with a marvelous entry of 100+ participants</p>"},
        {"eventimage":"https://radionitroz.in/static/media/redfmcollab.b9d400ec.jpg","eventtitle":"<h3>RED FM COLLAB</h3>","overview":"<p>RADIO NITroz in collaboration with RED FM 93.5 had organised <b>College Ke Tashanbaaz<b>, an offline event where the students were allowed to showcase their talents in any field of interest like dancing, singing, comedy, poetry, etc. The event was very successful with a huge participation.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/shaamenoor.0d2ad4e7.jpg","eventtitle":"<h3>SHAAM-E-NOOR</h3>","overview":"<p>Light is a symbol of unity, hope and power. This year's SHAAM-E-NOOR was on different hues of Diwali celebration. Flowers and rangolis, diyas and fairylights, crackers and fireworks, celebration and happiness all around. The festival of deepam is here and we can't resist ourselves from filling our souls with the brightness hovered upon. Pictures, selfies, posts and uploading stories becomes an integral part around the each decorated corners during Diwali so we posted participant’s entries on our Instagram and FB page. SHAAM-E-NOOR is well received by the participants. A total of 130 Entries across 58 Institutions were made for 2nd edition of SHAAM-E-NOOR.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/TASHAANBAAZ7.b68ce996.jpg","eventtitle":"<h3>COLLEGE KE TASHANBAAZ SEASON-6</h3>","overview":"<p>Everybody is talented because everyone has something to express. COLLEGE KE TASHANBAAZ SEASON-6 one of the craziest and peerless events of NIT Durgapur proffers students an eminent platform to showcase their veiled flairs and where they can flaunt their dexterity and virtuosity of either innate talent or a cultivated skill cause talents are meant to be shared.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/NEXUS_VERSE.6326236d.jpg","eventtitle":"<h3>NEXUS VERSE</h3>","overview":"<p>Growing up Jigsaw puzzle has often been a funand jubilant pastimewe all had. The little pieces interlocking and nonchalantly painting the infinite. The Nexus Verse is an upgradedand maverick version of a trivia event whereenven the simplest entity is entangled into alabyrinth of a puzzle. This event had an overwhelming participation of 200+ pepole.</p>"},
        {"eventimage":"https://radionitroz.in/static/media/voice_it_out.f3d1fccb.jpg","eventtitle":"<h3>VOICE IT OUT</h3>","overview":"<p>Human race is filled with passion. VOICE IT OUT is a live poem recitation event which provides a striking rostrum to everyone where they can showcase their talents by recitating poems, shayaries, short stories penned solely.This is a call to all the budding poets, shayars out there who have never got an opportunity to showcase their aptitude. The poem becomes another part of the vocabulary with which we can encounter and process our experiences in the world. We are in search for the poet or poetess that lives trapped in your heart.</p>"},
    ];

    const main = document.querySelector('.main');
   main.innerHTML='';
    showEvents(events);

    async function showEvents(events) {
        events.forEach((event) => {
            const eventElement = document.createElement("div");
            eventElement.innerHTML='';
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <div class="eve">
                <div class="eventimg">
                    <img src="${event.eventimage}" alt="event poster" class="eventimage">
                    </div>  
                    <div class="title1">
                        <h2 class="title2">${event.eventtitle}</h2>
                    </div>
                    <div class="overview">
                        <h2 class="title"><a href="/" id="eventlink">${event.eventtitle}</a></h2>
                        <p>${event.overview}</p>
                    </div>
                </div>`;
            main.appendChild(eventElement);
        });
    }
    const teamMembers4th = [
        { name: '<h3><b>Dhiraj Kumar</b></h3>', position: ' <span>President</span>', image: 'https://radionitroz.in/static/media/Dhiraj%20Kumar.36826340.jpg' },
        { name: '<h3><b>Akshay A Baiju</b></h3>', position: '<span>Vice President &amp; Sponser Head</span>', image: 'https://radionitroz.in/static/media/Akshay%20A%20Baiju.3c36810c.png' },
        { name: '<h3><b>Priyanshu Burman</b></h3>', position: ' <span>General Secretary &amp; Design Head</span>', image: 'https://radionitroz.in/static/media/priyanshu.9907614a.jpg' },
        { name: '<h3><b>Kalyan Choubey</b></h3>', position: ' <span>Treasurer &amp; Publicity Head</span>', image: 'https://radionitroz.in/static/media/Kalyan%20chaubey.a606f5ec.jpg' },
        { name: '<h3><b>Ashish Raj</b></h3>', position: '<span>Convenor</span>', image: 'https://radionitroz.in/static/media/Ashish%20Raj.08d2f9b7.jpg' },
        { name: '<h3><b>Amool Khudia</b></h3>', position: '<span>Tech Head</span>', image: 'https://radionitroz.in/static/media/Amool.2a0afb91.jpg' },
        { name: '<h3><b>Sumit Kumar Sah</b></h3>', position: '<span>Event &amp; Logistics Head</span>', image: 'https://radionitroz.in/static/media/SumitSah.17073932.jpeg' },
        { name: '<h3><b>Sankalp Mishra</b></h3>', position: '<span>Fest Head</span>', image: 'https://radionitroz.in/static/media/sankalp.26ae5c44.jpg' },
    ];
    const teamMembers3rd = [
        { name: '<h3><b>Aditya Chavhan </b> </h3>', position: '<span>Web D</span>', image: 'https://radionitroz.in/static/media/Adityanew.a3349d20.jpeg' },
        { name: '<h3><b>Basab Lekri</b> </h3>', position: '<span>Web D</span>', image: 'https://radionitroz.in/static/media/Basab.ec7b21ad.jpeg' },
        { name: '<h3><b>Priyal Bhalerao </b></h3>', position: ' <span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/Priyal.fb8ca003.jpg' },
        { name: '<h3><b>Aniket Kamble </b></h3>', position: ' <span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/Aniket_.8b6200b3.jpg' },
        { name: '<h3><b>Nabina Layek</b></h3>', position: ' <span>Content Writer</span>', image: 'https://radionitroz.in/static/media/Nabina.9985aeba.jpg' },
        { name: '<h3><b>Shubham Ghosh</b></h3>', position: ' <span>Graphic design</span>', image: 'https://radionitroz.in/static/media/Shubham.b8e235d6.jpg' },
        { name: '<h3><b>Chowdhari Dharma Teja</b> </h3>', position: '<span>Event Management</span>', image: 'https://radionitroz.in/static/media/Dharma.4ed1f5be.jpg' },
        { name: '<h3><b>Saptarshi Ghosh</b> </h3>', position: '<span>Content Writer</span>', image: 'https://radionitroz.in/static/media/Saptarshi.95431c04.jpg' },
        { name: '<h3><b>Sumit Rastogi</b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/Sumit.8f756d48.jpg' },
        { name: '<h3><b>K.E.N.S Venkateshwarlu </b></h3>', position: ' <span>Video Editor</span>', image: 'https://radionitroz.in/static/media/Venkateshwarlu.2cd23767.jpeg' },
        { name: '<h3><b>Rishav Mondal</b> </h3>', position: '<span>Video Editor</span>', image: 'https://radionitroz.in/static/media/Rishav.038218f0.jpg' },
        { name: '<h3><b>Rajeev Kumar Yadav </b></h3>', position: ' <span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/RAJEEV.4a17d3b5.png' },
        { name: '<h3><b>Dyuti Biswas</b></h3>', position: ' <span>Photographer</span>', image: 'https://radionitroz.in/static/media/Dyuti_.c8fc59b3.jpg' },
        { name: '<h3><b>Debashis Panigrahi </b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/Debashis.bf44bff1.jpg' },
        { name: '<h3><b>Vineet Jeengar </b> </h3>', position: 'Manager<span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/Vineet.5d1424b6.jpeg' },
        { name: '<h3><b>Sobhag Bairwa</b> </h3>', position: '<span>Video Editing</span>', image: 'https://radionitroz.in/static/media/Sobhag.eac558da.jpeg' },
        { name: '<h3><b>Somaptro Manohar</b></h3>', position: ' <span>Content Writing</span>', image: 'alex.jpghttps://radionitroz.in/static/media/Somapatrao.fb4c1de3.jpeg' },
    ];
    const teamMembers2nd = [
        { name: '<h3><b>Jayant Mandal </b></h3>', position: ' <span>Video Editor and Event Management</span>', image: 'https://radionitroz.in/static/media/jayant.8f1bd1c4.jpg' },
        { name: '<h3><b>S KIRTHIKA</b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/Kirthika.6999743c.jpg' },
        { name: '<h3><b>Mohammed Asif </b></h3>', position: ' <span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/Mohammed%20Asif.565a636a.jpg' },
        { name: '<h3><b>Ramya Akalankam </b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/ramya.f113c21e.jpg' },
        { name: '<h3><b>karthikeya</b></h3>', position: ' <span>Video Editing </span>', image: 'https://radionitroz.in/static/media/karthik.0900ebb5.jpg' },
        { name: '<h3><b>K PRANESH RAO</b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/PRANESH.7bad8073.jpg' },
        { name: '<h3><b>Rupali Kumari</b></h3>', position: ' <span>Content Writer</span>', image: 'https://radionitroz.in/static/media/Rupali.3f1978e5.jpg' },
        { name: '<h3><b>Arnab Banerjee</b></h3>', position: ' <span>Content Writer</span>', image: 'https://radionitroz.in/static/media/Arnab%20Banerjee.79320dab.jpg' },
        { name: '<h3><b>Anshika Goswami</b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/Anshika.27c6b3f8.jpg' },
        { name: '<h3><b>D.V.prasanna Kumar </b></h3>', position: ' <span>Video Editor</span>', image: 'https://radionitroz.in/static/media/cherry.59570c5b.jpeg' },
        { name: '<h3><b>D.Sai Sahil</b></h3>', position: ' <span>Web Development and Graphic Design</span>', image: 'https://radionitroz.in/static/media/SAI%20SAHIL.b582a455.JPG' },
        { name: '<h3><b>Shreyasi Roy</b></h3>', position: ' <span>Graphic Design</span>', image: 'https://radionitroz.in/static/media/sreyashi.348a8dd3.jpg' },
        { name: '<h3><b>Sarmistha Naskar</b></h3>', position: ' <span>Content Writting </span>', image: 'https://radionitroz.in/static/media/Sarmistha.64a9a910.jpg' },
        { name: '<h3><b>Parthib Sen</b></h3>', position: ' <span>Event Management</span>', image: 'https://radionitroz.in/static/media/ParthibSen.7a7bd0e5.jpg' },
        { name: '<h3><b>Sk Raj Ali</b></h3>', position: ' <span>Web Development</span>', image: 'https://radionitroz.in/static/media/Raj.6701e509.jpg' },
    ];
        function showMembers(members) {
            const teamContainer = document.getElementById('teamContainer');
            teamContainer.innerHTML = '';
    
            members.forEach(member => {
                const memberElement = document.createElement("div");
                memberElement.classList.add('team-member');
                memberElement.innerHTML = `
                    <img src="${member.image}" alt="" class="members">
                    <div class="details">
                        <div class="name">${member.name}</div>
                        <div class="position">${member.position}</div>
                    </div>`;
                teamContainer.appendChild(memberElement);
            });
        }
    
        // Event listeners for team member selection buttons
        document.getElementById('team4thBtn').addEventListener('click', function() {
            showMembers(teamMembers4th);
        });
    
        document.getElementById('team3rdBtn').addEventListener('click', function() {
            showMembers(teamMembers3rd);
        });
    
        document.getElementById('team2ndBtn').addEventListener('click', function() {
            showMembers(teamMembers2nd);
        });
        showMembers(teamMembers4th);

        const sponsers = [
            { logo: 'https://radionitroz.in/static/media/logiczap.9c50e3e2.jpeg' },
            { logo: 'https://radionitroz.in/static/media/wildstone.1c87940b.jpeg' },
            { logo: 'https://radionitroz.in/static/media/pizza.d4b69360.jpeg' },
            { logo: 'https://radionitroz.in/static/media/redFm.6002ca9d.jpeg' },
            { logo: 'https://radionitroz.in/static/media/gg.419ad0b1.jpeg' },
            { logo: 'https://radionitroz.in/static/media/wileyindia.42c00e29.jpg' },
            { logo: 'https://radionitroz.in/static/media/thementorx.d0d2795c.jpg' },
            { logo: 'https://radionitroz.in/static/media/hoverrobotix.7590a3c6.jpg' },
           
           
        ];
        const sponcon = document.getElementById('totaspon'); 
        function showsponsers(sponsors) {
            const totalSponsors = document.getElementById('totalSponsors');
            totalSponsors.innerHTML = ''; // Clear previous sponsor logos
        
            sponsors.forEach(sponsor => {
                const sponsorElement = document.createElement("div");
                sponsorElement.classList.add('ourspon');
                sponsorElement.innerHTML = `
                    <img src="${sponsor.logo}" alt="Sponsor Logo" class="sponlogo">`;
                totalSponsors.appendChild(sponsorElement);
            });
        }
    showsponsers(sponsers);
    const photos = document.querySelectorAll('.photo');
    const alumini = [
        { year: '2019-2023', names: ['Sonali Sah', 'Aditya Gupta', 'Ayush Chaudhary', 'Ayush Singh', 'Aditi Gedam', 'Pragya Kumari'] },
        { year: '2018-2022', names: ['Arjya Singh Roy', 'Ankita Singha', 'Gourab Mondal', 'Sayantan Maity', 'Kiran P Abraham', 'Pavan Preetham'] },
        { year: '2017-2021', names: ['Kuldeep Suthar', 'Pooja Yadav', 'Pratik Biswas', 'Gourav Dogra', 'Kritika Gora', 'Sourav Das', 'Amit Dalai', 'Ashish Kumar'] },
        { year: '2016-2020', names: ['Anshu Kumari', 'Kunal D. Dekate', 'S. Hariharan', 'Aryaman Panda', 'Sanhita Pal', 'Sayoni Shah', 'Nitika Mondal', 'Sachin K Yadav'] },
        { year: '2015-2019', names: ['R. Nancy', 'Rahul Singh', 'Sarwani Kumari', 'Hema Maurya', 'Swarnendu Mondal', 'Chandan Tyagi'] },
        { year: '2014-2018', names: ['Mahesh Nayak', 'Pooja Maurya', 'Nitin Thomas', 'Jyoti Singh', 'Ujas B. Nandasana', 'Chetender Chauhan'] },
        { year: '2013-2017', names: ['Ahmed Meeran', 'Kavisha Agarwal', 'Rishabh Pankaj', 'Vivek Kumar Singh', 'Gaurav Agarwal', 'Diksha Dubey', 'B.Harika', 'Rahul Ranjan'] },
        { year: '2012-2016', names: ['Pallavi Chaurasia', 'Anupam Anand', 'Himanshu', 'R Sanish', 'Aman Kumar', 'Shivang', 'M Ramsudharsan', 'Abhijith T', 'S.H.Nilofer Maideen', 'Swati Mehta'] },
        { year: '2011-2015', names: ['Shivang Singh', 'Jitendra Kushram'] },
        { year: '2010-2014', names: ['Keshav Gupta', 'Harshit Arya', 'Anjali Mathur'] },
        { year: '2008-2012', names: ['Sandhya', 'Varsha Gupta', 'Vasu Irneni', 'Ria Baki Lalu', 'Tapash'] },
        { year: '2007-2011', names: ['Shankaransh Srivastava', 'Anubhav Mehta', 'Swati Gorade', 'Sanghamitra Das', 'Arpita Banerjee'] },
        { year: '2005-2009', names: ['Samrat Chakravorty', 'Deepu', 'Anil Nagpal'] },
        { year: '2004-2008', names: ['Arjun Mehra', 'Arun Krishnamoorthy', 'Piyush Chitkara', 'Santhosh', 'Sangeet Somakumar'] },
    ];
    
    
        const alumniContainer = document.getElementById('alumniContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
    
        let currentIndex = 0;
    
        function showAlumni() {
            alumniContainer.innerHTML = ''; // Clear previous alumni cards
    
            const currentAlumni = alumini[currentIndex];
    
            const heading = document.createElement('div');
            heading.classList.add('alumni-card');
            heading.innerHTML = `<h3 class="card">${currentAlumni.year}</h3>`;
            alumniContainer.appendChild(heading);
    
            currentAlumni.names.forEach(name => {
                const alumniCard = document.createElement('div');
                alumniCard.classList.add('alumni-card');
                alumniCard.innerHTML = `<p>${name}</p>`;
                alumniContainer.appendChild(alumniCard);
            });
        }
    
        function showNextAlumni() {
            currentIndex = (currentIndex + 1) % alumini.length;
            showAlumni();
        }
    
        function showPrevAlumni() {
            currentIndex = (currentIndex - 1 + alumini.length) % alumini.length;
            showAlumni();
        }
    
        // Event listeners for next and previous buttons
        nextBtn.addEventListener('click', showNextAlumni);
        prevBtn.addEventListener('click', showPrevAlumni);
    
        // Initial display
        showAlumni();
    
        // Auto-cycle through alumni every 35 seconds
        setInterval(showNextAlumni, 5500);
            
        let presentgall = 0;
        const images = document.querySelectorAll('.image');
        
        // Show the first image initially
        images[presentgall].style.display = 'block';
        
        function nextImage() {
            images[presentgall].style.display = 'none';
            presentgall = (presentgall + 1) % images.length;
            images[presentgall].style.display = 'block';
        }
        
        function prevImage() {
            images[presentgall].style.display = 'none';
            presentgall = (presentgall - 1 + images.length) % images.length;
            images[presentgall].style.display = 'block';
        }
        
        // Auto next every 2 seconds
        setInterval(nextImage, 2000);
           

        
     
})
