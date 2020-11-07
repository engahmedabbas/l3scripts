


//Physically down

function myFunction() {
  // variable content to be copied
  var physically_down = "L3 Not Solved-Line is Phy. DN:Line is physically down so please recheck."
  // create an input element
  let input = document.createElement('input');
  // setting it's type to be text
  input.setAttribute('type', 'text');
  // setting the input value to equal to the text we are copying
  input.value = physically_down;
  // appending it to the document
  document.body.appendChild(input);
  // calling the select, to select the text displayed
  // if it's not in the document we won't be able to
  input.select();
  // calling the copy command
  document.execCommand("copy");
  // removing the input from the document
  document.getElementById("output").value = physically_down ;
  document.body.removeChild(input)
}


////////////////////////////////////////////////////////////////////
// physically down with no problem found
function myFunction1() {
  // variable content to be copied
  var physically_down_no_problem = "L3 Not Solved-Line is Phy. DN:Line is physically down also noted that there is no problem from network side , please check again with the customer by reset and reconfigure the modem if the problem still exist."
  // create an input element
  let input = document.createElement('input');
  // setting it's type to be text
  input.setAttribute('type', 'text');
  // setting the input value to equal to the text we are copying
  input.value = physically_down_no_problem;
  // appending it to the document
  document.body.appendChild(input);
  // calling the select, to select the text displayed
  // if it's not in the document we won't be able to
  input.select();
  // calling the copy command
  document.execCommand("copy");
  // removing the input from the document
    document.getElementById("output").value = physically_down_no_problem ;
  document.body.removeChild(input)
}
/////////////////////////////////////////////////////////////////////
// physically down with no problem found
function myFunction2() {

    var cabinetcode = document.getElementById('cabinet').value;
  // variable content to be copied
//cabinetcode
  var cabinet_offline = "L3 Not Solved-Cabinet Offline:Cabinet("+cabinetcode+")is offline , please check with physical team."
  //var sum =   cabinet_offline + cabinetcode
  // create an input element
  let input = document.createElement('input');
  // setting it's type to be text
  input.setAttribute('type', 'text');
  // setting the input value to equal to the text we are copying
  input.value =cabinet_offline;
  // appending it to the document
  document.body.appendChild(input);
  // calling the select, to select the text displayed
  // if it's not in the document we won't be able to
  input.select();
  // calling the copy command
  document.execCommand("copy");
  // removing the input from the document
  document.getElementById("output").value = cabinet_offline ;
  document.body.removeChild(input)
}
//////////////////////////////////////////////////////
//L3 Not Solved-Wrong port.
function myFunction3() {
 var wrong_interface = document.getElementById('interface').value;
  var wrong_port = "L3 Not Solved-Wrong port:Customer is logging from wrong interface("+wrong_interface+")please check with physical team."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =wrong_port ;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value = wrong_port  ;
  document.body.removeChild(input)
}
//////////////////////////////////////////
//L3 Solved-Prof. Modified:Profile Adjusted-Done
function myFunction4() {

  var Prof_Modified = "L3 Solved-Prof. Modified:Profile Adjusted-Done."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Prof_Modified;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
      document.getElementById("output").value = Prof_Modified  ;
  document.body.removeChild(input)
}
/////////////////////////////
//L3 Not Solved-Bad Parameters:Line is up with the bad parameters , please check with the physical team
function myFunction5() {

  var Bad_Parameters = "L3 Not Solved-Bad Parameters:Line is up with the bad parameters , please check with the physical team."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Bad_Parameters;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value = Bad_Parameters  ;
  document.body.removeChild(input)
}
//////////////////////////
//L3-Solved -No Action :As line is up //line is up with accepted profile
function myFunction6() {

  var Accepted_Profile = "L3-Solved -No Action :As line is up with accepted profile."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Accepted_Profile;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value = Accepted_Profile  ;
  document.body.removeChild(input)
}
///////////////////////////////////////////////
//L3 Mac Not Learned :Mac is not Learned from the Modem, so please check again by resetting and configure the modem.
function myFunction7() {

  var Mac_Not_Learned = "L3 Mac Not Learned :Mac is not Learned from the Modem, so please check again by resetting and re-configuring the modem."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Mac_Not_Learned;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value = Mac_Not_Learned  ;
  document.body.removeChild(input)
}
///////////////////////////////
//L3 Not Solved Line Chang. Msan :line changed to MSAN so please follow with OM team
function myFunction8() {

  var Chang_Msan = "L3 Not Solved Line Chang. Msan :line changed to MSAN so please follow with OM team."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Chang_Msan;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value = Chang_Msan  ;
  document.body.removeChild(input)
}
//////////////////////////////////////////
//L3-Force Majeure Issues
//////////////////////////////////
//L3 Not Solved-Rep. Auth :Checking port Configuration and will update you once solved.
function myFunction9() {

  var Rep_Auth = "L3 Not Solved-Rep. Auth :Checking port Configuration and will update you once solved."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Rep_Auth;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
      document.getElementById("output").value = Rep_Auth  ;
  document.body.removeChild(input)
}
//////////////////
//L3 Not Solved-No Traffic:cabinet "cabinet code" has  no traffic and we are checking.
function myFunction10() {
  var cabinetcode = document.getElementById('cabinet').value;
  var No_Traffic = "L3 Not Solved-No Traffic:cabinet("+cabinetcode+")has no traffic and we are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =No_Traffic;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value = No_Traffic ;
  document.body.removeChild(input)
}
//////////////////////////
//L3 Not Solved-Cabinet conf. prob.:cabinet has wrong log"LOG" and we are checking
function myFunction11() {
  var wronglog = document.getElementById('log').value;
  var cabinet_conf_prob = "L3 Not Solved-Cabinet conf. prob.:cabinet has wrong log ("+ wronglog +") and we are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =cabinet_conf_prob;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value = cabinet_conf_prob ;
  document.body.removeChild(input)
}
/////////////////////////////////
//L3 Not Solved-Cab. Not Found.:Line is on cabinet ""  that it is not found on System and we are checking.
function myFunction12() {
  var cabinetcode = document.getElementById('cabinet').value;
  var Cab_Not_Found = "L3 Not Solved-Cab. Not Found.:Line is on cabinet("+cabinetcode+")that it is not found on System and we are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cab_Not_Found;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
      document.getElementById("output").value = Cab_Not_Found ;
  document.body.removeChild(input)
}
///////////////////////////
//L3 Not Solved-Duplicate Cvlan:Line Cvlan is Duplicated with username "" with CVLAN "" and We are checking.
function myFunction13() {
  var CVLAN = document.getElementById('cvlan').value;
  var USERNAME = document.getElementById('username').value;
  var Duplicate_Cvlan = "L3 Not Solved-Duplicate Cvlan:Line Cvlan is Duplicated with username("+USERNAME+") with CVLAN ("+CVLAN+") and We are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Duplicate_Cvlan;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value = Duplicate_Cvlan ;
  document.body.removeChild(input)
}
/////////////
//L3 Not Solved-Svlan Not Ready:cabinet has not Svlan Ready and we are checking , New Cabinet is "04-1-01-164" new ////Cvlan is "2621"
function myFunction14() {
  var CVLAN = document.getElementById('cvlan').value;
var cabinetcode = document.getElementById('cabinet').value;
  var Svlan_Not_Ready = "L3 Not Solved-Svlan Not Ready:cabinet has not Svlan Ready  New Cabinet is ("+cabinetcode+") new Cvlan is ("+CVLAN+") and We are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Svlan_Not_Ready;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value = Svlan_Not_Ready ;
  document.body.removeChild(input)
}
////////////////////////
//L3 Not Solved-Missing Config.:line on cabinet "" and it has missing Configuration on Core router and we are /////////checking.
function myFunction15() {

var cabinetcode = document.getElementById('cabinet').value;
  var Missing_Config = "L3 Not Solved-Missing Config.:line on cabinet ("+cabinetcode+") and it has missing Configuration on Core routers and we are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Missing_Config;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Missing_Config ;
  document.body.removeChild(input)
}
/////////////////////
//L3 Not Solved-Cvlan Error :Line has Cvlan Error "" and we are checking.
function myFunction16() {

var cvlanerror = document.getElementById('error').value;
  var Cvlan_Error = "L3 Not Solved-Cvlan Error :Line has Cvlan Error("+cvlanerror+")and we are checking ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cvlan_Error;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value =Cvlan_Error ;
  document.body.removeChild(input)
}
////////////////////////////
//L3 Not Solved-Change Modem :kindly let the customer check again using another modem
function myFunction17() {

  var Change_Modem= "L3 Not Solved-Change Modem :kindly let the customer check again using another modem ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Change_Modem;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
      document.getElementById("output").value =Change_Modem;
  document.body.removeChild(input)
}
/////////////////
//Redirections
/////////////
//L3 Not Solved-NO PAYMENT :customer has No payment on BNG
function myFunction18() {

  var NO_PAYMENT= "L3 Not Solved-NO PAYMENT :customer has No payment on BNG ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =NO_PAYMENT;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
        document.getElementById("output").value =NO_PAYMENT;
  document.body.removeChild(input)
}
/////////////////
//L3 Not solved – Quota Status :     customer had consumed ( % ) of his quota and he was authenticated with IP
function myFunction19() {
var QOUTA = document.getElementById('qouta').value;
var IP = document.getElementById('ip').value;
  var Quota_Status= "L3 Not solved – Quota Status : customer had consumed("+QOUTA+"%)of his quota and he was authenticated with IP("+IP+") ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Quota_Status;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Quota_Status;
  document.body.removeChild(input)
}
///////////////////////
//L3 Not Solved-Wrong QOS :customer has Wrong QOS
function myFunction20() {

  var Wrong_QOS= "L3 Not Solved-Wrong QOS :customer has Wrong QOS please check"
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Wrong_QOS;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Wrong_QOS;
  document.body.removeChild(input)
}
//////////
////L3 Not Solved-Falcon Error:there is an Error while adding or updating  customer on Falcon and we are checking
function myFunction21() {

  var Falcon_Error= "L3 Not Solved-Falcon Error:there is an Error while adding or updating  customer on Falcon and we are checking with concerned Team ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Falcon_Error;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value =Falcon_Error;
  document.body.removeChild(input)
}
//////////////////////////////////////
///L3 Not Solved-Wrong Username :customer wrote Wrong Username "" so please reset and reconfigure customer modem.
function myFunction22() {
var WRONG_USER = document.getElementById('wrong_user').value;
  var Wrong_Username= "L3 Not Solved-Wrong Username :customer wrote Wrong Username("+WRONG_USER+")so please reset and reconfigure customer modem ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Wrong_Username;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
      document.getElementById("output").value =Wrong_Username;
  document.body.removeChild(input)
}
///////////////////////////////
//CONNECT

function myFunction23() {

  var CONNECT= "L3 Not Solved-Wrong Username : CONNECT problem(There is a problem in Modem configuration) So no action could be taken from our side  so please reset and reconfigure customer modem from advanced configuration page ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =CONNECT;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
        document.getElementById("output").value =CONNECT;
  document.body.removeChild(input)
}
//////////////////////////////////
//L3 Not Solved-Unknown User:customer wrote Wrong Username "" and it should be "Right Username" to  Match PCRF
function myFunction24() {

  var Unknown_User= "L3 Not Solved-Unknown User:customer redirected unknown user and he wrote it correctly as seible and pcrf so please recheck ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Unknown_User;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
        document.getElementById("output").value =Unknown_User;
  document.body.removeChild(input)
}
/////////////////////////
//L3 No Action :Add the description according to the issue type
function myFunction25() {
 var DESCRIPTION = document.getElementById('description').value;
  var No_Action= "L3 No Action : "+DESCRIPTION+"."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =No_Action;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =No_Action;

  document.body.removeChild(input)
}
//////////////////
//L3 Not solved -TE port Status :port status on bitstream portal is “ “, please check
function myFunction26() {
 var PORT_STATUS = document.getElementById('port_status').value;
  var TE_port_Status= "L3 Not solved -TE port Status :port status on bitstream portal is("+PORT_STATUS+") please check ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =TE_port_Status;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =TE_port_Status;

  document.body.removeChild(input)
}
//////////////////////
//L3 Not Solved- Missing Tasks :Line Not Exist on Falcon , so please follow with EAI And Siebel Team
function myFunction27() {

  var Missing_Tasks= "L3 Not Solved- Missing Tasks :Line Not Exist on Falcon , so please follow with EAI And Siebel Team ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Missing_Tasks;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Missing_Tasks;

  document.body.removeChild(input)
}
//////////////////////////////////////
//L3 Not Solved-No problem found :No problem from network side , please check again with the customer by reset and

function myFunction28() {

  var No_problem_found= "L3 Not Solved-No problem found :No problem from network side , please check again with the customer by reset and reconfigure the modem ."
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =No_problem_found;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =No_problem_found;

  document.body.removeChild(input)
}
//////////////////////////////////////
//glopal problem

function myFunction29() {

  var Global_Problem= "L3 Not Solved -Global Problem : Global problem and added on Communication tool ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Global_Problem;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Global_Problem;

  document.body.removeChild(input)
}
//////////////////////////////////////
//L3 Solved-Mism Cab. code:

function myFunction30() {
  var cabinetcode = document.getElementById('cabinet').value;
  var CVLAN = document.getElementById('cvlan').value;
  var IP = document.getElementById('ip').value;
  var Mismatch_Cabinet= "L3 Solved-Mism Cab. code: Mismatch Cabinet code, problem solved,New Cabinet code ("+cabinetcode+") new Cvlan ("+CVLAN+") customer authenticated with ip ("+IP+"), please recheck with the customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Mismatch_Cabinet;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Mismatch_Cabinet;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-Mism Cab. code (Not auth)
function myFunction31() {
  var cabinetcode = document.getElementById('cabinet').value;
  var CVLAN = document.getElementById('cvlan').value;

  var Mismatch_Cabinet_NOT_AUTH= "L3 Solved-Mism Cab. code: Mismatch Cabinet code, New Cabinet code ("+cabinetcode+") new Cvlan ("+CVLAN+") please recheck with the customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Mismatch_Cabinet_NOT_AUTH;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
    document.getElementById("output").value =Mismatch_Cabinet_NOT_AUTH;
  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-Mism Cab. code (PHY DOWN)
function myFunction32() {
  var cabinetcode = document.getElementById('cabinet').value;
  var CVLAN = document.getElementById('cvlan').value;

  var Mismatch_Cabinet_PHY_DOWN= "L3 Solved-Mism Cab. code: Mismatch Cabinet code, New Cabinet code ("+cabinetcode+") new Cvlan ("+CVLAN+") but line is physically down so  please recheck with the customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Mismatch_Cabinet_PHY_DOWN;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Mismatch_Cabinet_PHY_DOWN;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-Cvlan Mismatch:

function myFunction33() {

  var IP = document.getElementById('ip').value;
  var Cvlan_Mismatch= "L3 Solved-Cvlan Mismatch:Cvlan Mismatch, data updated on Falcon with right info,customer authenticated with ip ("+IP+") please check with customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cvlan_Mismatch;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Cvlan_Mismatch;

  document.body.removeChild(input)
}

//////////////////////////////////////
//Cvlan Mismatch (Not auth)
function myFunction34() {
  var cabinetcode = document.getElementById('cabinet').value;
  var CVLAN = document.getElementById('cvlan').value;

  var Cvlan_Mismatch_NOT_AUTH= "L3 Solved-Cvlan Mismatch:Cvlan Mismatch, data updated on Falcon with right info,please check with customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cvlan_Mismatch_NOT_AUTH;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Cvlan_Mismatch_NOT_AUTH;

  document.body.removeChild(input)
}

//////////////////////////////////////
//Cvlan Mismatch (PHY DOWN)
function myFunction35() {
  var cabinetcode = document.getElementById('cabinet').value;
  var CVLAN = document.getElementById('cvlan').value;

  var Cvlan_Mismatch_PHY_DOWN= "L3 Solved-Cvlan Mismatch:Cvlan Mismatch, data updated on Falcon with right info, but line is physically down so please check with customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cvlan_Mismatch_PHY_DOWN;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Cvlan_Mismatch_PHY_DOWN;

  document.body.removeChild(input)
}

//////////////////////////////////////
//////////////////////////////////////
//L3 Solved-Falc Misma data:
function myFunction36() {

  var Falc_Misma_data= "L3 Solved-Falc Misma data:Adjusted , So please check with the customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Falc_Misma_data;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Falc_Misma_data;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved- Cross Conn.rest:


function myFunction37() {

  var IP = document.getElementById('ip').value;
  var Cross_Conn_rest= "L3 Solved- Cross Conn.rest:Cross connect reset done, and line is Authenticated now , With IP ("+IP+") ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =Cross_Conn_rest;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =Cross_Conn_rest;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-Cus.alredy auth:


function myFunction38() {

  var IP = document.getElementById('ip').value;
  var alredy_auth= "L3 Solved-Cus.alredy auth:Customer is already Authenticated with IP ("+IP+") ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =alredy_auth;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =alredy_auth;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-SDX Config:


function myFunction39() {

  var IP = document.getElementById('ip').value;

  var SDX_Config= "L3 Solved-SDX Config:SDX updated , line authenticated with("+IP+") ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =SDX_Config;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =SDX_Config;

  document.body.removeChild(input)
}

//////////////////////////////////////
//L3 Solved-SDX Config NOT AUTH:


function myFunction40() {

  var IP = document.getElementById('ip').value;

  var SDX_Config_NOT_AUTH= "L3 Solved-SDX Config:SDX updated ,Please check with customer ."

  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =SDX_Config_NOT_AUTH;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =SDX_Config_NOT_AUTH;

  document.body.removeChild(input)
}


//////////////////////////////////////

function Copy_Button() {

  var COPY = document.getElementById('output').value;



  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =COPY;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");

  document.body.removeChild(input)
}


//////////////////////////////////////
