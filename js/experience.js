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
                "Handled local packages to maintain custom components and to maintain API architecture",
                "Maintaining layered architecture for better encapsulation and abstraction of code from Application layer to domain layer and to data layer",
                "Learned GitLab actions for CI/CD",
                "Integration of REST APIs, Firebase and local cached concepts for better user experience",
                "Added features in huge code base with scalability in mind, along with other concepts of OOP and design pattern.",
                "Working on content management system(CMS) or enterprise resource planning(ERP)"
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
                "Working with flutter_bloc state management, alongside provider to maintain local states and global use cases",
                "Integrated payment gateways into flutter app with REST APIs",
                "Handled local packages to maintain custom components and to maintain API architecture",
                "Maintaining layered architecture for better encapsulation and abstraction of code from Application layer to domain layer and to data layer",
                "Learned GitHub actions for CI/CD",
                "Worked with various env. flavors in flutter app (dev, qa, stage, prod)",
                "Learned concepts like ACL (Access Control List) for maintaining features in live app",
                "Integration of REST APIs, Firebase and local cached concepts for better user experience",
                "Added features in huge code base with scalability in mind, along with other concepts of OOP and design pattern.",
                "Worked in Agile software methodology, worked in sprints and different team structures like Squads.",
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
                "Developed first MVP for android application",
                "Upgraded MVP to latest flutter SDK as the MVP was developed in flutter 1.x.x",
                "Currently handling the BETA version for the mobile app using flutter (android/iOS) both",
                "Written cloud functions on firebase to handling some of the backend logic that needs to be separated from mobile application layer",
                "Followed bloc architecture and state management for scalable application",
                "Implemented caching techniques for better UX",
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
                "Learned new materials, processes, and programs quickly.",
                "Participated in on-the-job training, working closely with supervisors and",
                "coworkers and asking appropriate questions.",
                "Attended training courses to build understanding of processes,",
                "techniques, and industry.",
                "Shadowed senior team members to learn all related jobs and tasks.",
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