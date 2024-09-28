document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Wi3bit",
            "position": "Flutter Developer",
            "duration": "Aug 2023 - Present",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "GitLab",
                "Firebase",
                "REST APIs",
                "Dart package"
            ],
            "details": [
                "❖ Lead the development and optimization of the Wi3bit Content Management System ",
                "(CMS) and mobile applications. ",
                "❖ Spearheaded the enhancement of mobile applications, ensuring alignment with evolving ",
                "industry standards and best practices. ",
                "❖ Collaborated closely with product managers and cross-functional teams to define project ",
                "roadmaps, deliverables, and timelines. ",
                "❖ Established coding milestones, achieving early-stage deployment goals and ensuring a ",
                "seamless user experience across all platforms. ",
                "❖ Introduced process improvements and code quality initiatives that boosted productivity and ",
                "reduced bug occurrences. "
            ]
        },
        {
            "org": "SDH",
            "position": "Flutter Developer (Contract)",
            "duration": "May 2023 - Aug 2023",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Firebase",
                "REST APIs",
                "Dart package"
            ],
            "details": [
                "❖ Designed, developed, and deployed mobile applications that increased company revenue by ",  
                "25% and generated over 10,000 downloads. ",
                "❖ Modernized legacy systems, integrating Flutter and Dart to enhance app performance, ",
                "scalability, and user engagement. ",
                "❖ Coordinated end-to-end project execution, including requirements gathering, development, ",
                "testing, and release, ensuring on-time delivery. ",
                "❖ Improved app functionality by implementing customer feedback and conducting extensive", 
                "usability testing, resulting in a 15% increase in user satisfaction. ",
            ]
        },
        {
            "org": "softechsquare",
            "position": "Flutter Developer",
            "duration": "Nov 2022 - May 2023",
            "technologies": [
                "Flutter/Dart",
                "GitHub Actions",
                "Firebase",
                "REST APIs",
                "Cloud functions",
            ],
            "details": [
                "❖ Developed first MVP for android application",
                "❖ Upgraded MVP to latest flutter SDK as the MVP was developed in flutter 1.x.x",
                "❖ Currently handling the BETA version for the mobile app using flutter (android/iOS) both",
                "❖ Written cloud functions on firebase to handling some of the backend logic that needs to be separated from mobile application layer",
                "❖ Followed bloc architecture and state management for scalable application",
                "❖ Implemented caching techniques for better UX",
            ]
        },
        {
            "org": "PTCP",
            "position": "Flutter Developer Trainee",
            "duration": "May 2022 - Oct 2022",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Firebase",
                "REST APIs",
            ],
            "details": [
                "❖ Learned new materials, processes, and programs quickly.",
                "❖ Participated in on-the-job training, working closely with supervisors and",
                "❖ coworkers and asking appropriate questions.",
                "❖ Attended training courses to build understanding of processes,",
                "❖ techniques, and industry.",
                "❖ Shadowed senior team members to learn all related jobs and tasks.",
            ]
        },
        
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}