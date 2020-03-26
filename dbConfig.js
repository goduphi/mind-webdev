// Your web app's Firebase configuration
var firebaseConfig =
{
	apiKey: "AIzaSyBGNm4dZWkZOEMtq1r0dQ4VSHFCvYj0eP4",
	authDomain: "deep-learning-research-site.firebaseapp.com",
	databaseURL: "https://deep-learning-research-site.firebaseio.com",
	projectId: "deep-learning-research-site",
	storageBucket: "deep-learning-research-site.appspot.com",
	messagingSenderId: "229314197695",
	appId: "1:229314197695:web:7d8801c777718bc6b62e0a",
	measurementId: "G-KRJ1JF6YDQ"
};

function InitializeFirebase()
{
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	console.log(firebase);
}

function GetNews()
{
	var database = firebase.database();
	var ref = database.ref('labNews');
	
	// Bind event
	ref.on('value', gotData, errData);
}

function GetMembers()
{
	var database = firebase.database();
	var ref = database.ref('team');
	
	// Bind event
	ref.on('value', GetMemberData, errData);
}

function GetMemberData(data)
{
	var team = data.val();
	var keys = Object.keys(team);
	
	for(var i = 0; i < keys.length; i++)
	{
		var type = keys[i];
		var typeList = team[type];
		var typeListKeys = Object.keys(typeList);
		
		for(var j = 0; j < typeListKeys.length; j++)
		{
			var typekey = typeListKeys[j];
			var indPerson = team[type][typekey]
			
			var name = indPerson["0"];
			var designanation = indPerson["1"];
			var department = indPerson["2"];
			var univ = indPerson["3"];
			var img = indPerson["4"];
			
			var member = document.createElement("div");
			member.id = "member"
			member.innerHTML = '<img src="' + img + '" class="memImg">' + '<h2>' + name + '</h2>'
							 + '<h3>' + designanation + '</h3>'
							 + '<p class="dep">' + department + '</p>'
							 + '<p class="univ">' + univ + '</p>';
			document.getElementById("TeamWrapper").appendChild(member);
		}
	}
}

function gotData(data)
{
	// data is the javascript object
	// console.log(data.val());
	var news = data.val();
	var keys = Object.keys(news);

	for(var i = 0; i < keys.length; i++)
	{
		var newsNumber = keys[i];
		var title = news[newsNumber].title;
		var organization = news[newsNumber].org;
		
		var newsInfo = document.createElement("p");
		newsInfo.innerHTML = title + "<br>" + organization;
		//document.getElementById("news").appendChild(newsInfo);
	}
}

function errData(err)
{
	console.log('Error!');
	console.log(err);
}