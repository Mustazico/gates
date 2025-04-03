<template>
    <div class="group-container">
    <h1>User Manual</h1>
    <div class="startup-container">
    <h2 style="color:blue">Startup</h2>
    <h4 @click="toggleVisibility('createUser')">
        Create User <span>{{ visibleSections.createUser ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.createUser">
      1. Press the "Log in" button in the top right corner<br>
      2. Enter a username in the input field (preferably firstname + lastname)<br>
      3. Make sure you read and check off "I accept the cookie policy"<br>
      4. Press "Log in"<br>
      5. A new prompt will show up. Make sure you select the correct team from the dropdown selection<br>
      6. Press "Send request"<br><br>
      A user request for your user has been created. Notify one of your supervisors who has the role "Super Admin"
      about your request as they have permission to confirm your user.
    </p>

    <!-- Log in Section -->
    <h4 @click="toggleVisibility('login')">
        Log in  <span>{{ visibleSections.login ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.login">
      1. Press the "Log in" button in the top right corner<br>
      2. Type your username in the input field (not case sensitive)<br>
      3. Check off the "I accept the cookie policy"<br>
      4. Press "Log in"<br><br>
      If you are an admin or super user, type the corresponding password. If you don't have it, contact a supervisor.
    </p>

    <!-- Teams Section -->
    <h4 @click="toggleVisibility('teams')">
        Teams<span>{{ visibleSections.teams ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.teams">
      When you are logged in, make sure you are watching the projects of your team.
      You can do this by looking at the team name in the top right corner.
      If you wish to switch which team you are watching, press the team name.
      This will open a dropdown selection tab where you can select the team view you wish to change to.
      If you wish to switch which team you belong to, contact one of your supervisors.
    </p>
    </div>
    <br>

    <div class="navigation-container">
    <h2 style="color:orange">Navigation</h2>

    <h4 @click="toggleVisibility('dashboard')">
            Dashboard <span>{{ visibleSections.dashboard ? '↓' : '→' }}</span>
        </h4> 
        <p v-show="visibleSections.dashboard">If you wish to navigate to the dashboard of your team you can do this by pressing "Dashboard"
        in the sidebar or the "GATES" title at the top of your screen.
    </p>

    <h4 @click="toggleVisibility('specificProject')">
            Specific Project <span>{{ visibleSections.specificProject ? '↓' : '→' }}</span>
    </h4>
        <p v-show="visibleSections.specificProject">If you want to navigate to a specific project, you can do this by pressing the name of the project in the
        sidebar underneath "My Projects" or by clicking on the project from the list on the dashboard. </p>
    
        <h4 @click="toggleVisibility('gates')">
            Gates <span>{{ visibleSections.gates ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.gates">
            You can see the list of gates belonging to a specific project my navigating to a specific project as explained above.</p>
    
            <h4 @click="toggleVisibility('tasks')">
            Tasks <span>{{ visibleSections.tasks ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.tasks">
            To see the list of tasks belonging to a gate, make sure you are in a project.
        Click on the gate and the tasks should dropdown below the gate</p>

     <h4 @click="toggleVisibility('escalatedProjects')">
            Escalated Projects <span>{{ visibleSections.escalatedProjects ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.escalatedProjects">
            You can navigate to projects at risk by pressing escelated projects in the sidebar</p>

     <h4 @click="toggleVisibility('adminPage')">
            Admin page <span>{{ visibleSections.adminPage ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.adminPage">
            If you need to make some superadmin actions, you can access the adminpage by using the sidebar</p>
        </div>
            <br>
    <div class="tooltip-container">
    <h2 style="color: green"> Tooltip/How to</h2>
    <h3 style="color:green"> User/Admin/Superadmin </h3>
    <h4 @click="toggleVisibility('commentProject')">
            Comment a project <span>{{ visibleSections.commentProject ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.commentProject">
            1. Navigate to the dashboard<br>
            2. Find the project you wish to leave a comment on <br>
            3. Hover your mouse over the project card at the righthand side underneath the comment section. When your cursor switch from a pointer to an input cursor you can click <br>
            4. A text box will appear. Insert your text and make sure you press "Enter" or leftclick outside the commentbox when done
        </p>

        <h4 @click="toggleVisibility('commentTask')">
            Comment a task <span>{{ visibleSections.commentTask ? '↓' : '→' }}</span>
        </h4>
        <p v-show="visibleSections.commentTask">
            1. Navigate to the project<br>
            2. Open the gate where task you wish to comment exists <br>
            3. Hover your mouse over the task card at the righthand side underneath the comment section. When your cursor switch from a pointer to an input cursor you can click<br>
            4. A text box will appear. Insert your text and make sure you press "Enter" or leftclick outside the commentbox when done.
        </p>

    <h4 @click="toggleVisibility('changeTaskProgress')">
            Change task progress<span>{{ visibleSections.changeTaskProgress ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changeTaskProgress">
        1. Navigate to the project. Click the gate to dropdown the tasks<br>
        2. Change the progress of the task by using the slider underneath "Activity Progress"<br> 
        3. Make sure you leave a signature by clicking "Yes" so your coworkes know who signed off on the task<br>
        </p><br>
    <h3 style="color:green">Admin/Superadmin</h3>

    <h4 @click="toggleVisibility('addProject')">
            Add a new project<span>{{ visibleSections.addProject ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.addProject">
        Important: A new project will contain the details of your team's project template<br><br>
        1. Navigate to the dashboard. Make sure you are in the correct team by looking at the teamname in the top right corner<br>
        2. Press "Add Project" in the bottom left underneath the projects<br>
        3. Add project title, PO-date, Scheduled Finish and PEM<br>
        4. Choose what template to use to create the project<br>
        5. Press "Create Project"<br>
        Your new project should instantly appear in the projectlist on the dashboard and in the sidebar.
    </p>
    <h4 @click="toggleVisibility('deleteProject')">
            Delete an existing project<span>{{ visibleSections.deleteProject ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.deleteProject">
        1. Navigate to the project you wish to delete<br>
        2. On the bottom left click "Delete Project"<br>
        3. A warning message will show up<br>
        4. Click "Yes"<br>
        Your old project should instantly disappear from projectlist on the dashboard and in the sidebar. 
    </p>
    <h4 @click="toggleVisibility('changeProjectTitle')">
            Change project title<span>{{ visibleSections.changeProjectTitle ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changeProjectTitle">
        1. Navigate to the project you wish to change the title of<br>
        2. Click on the project title<br>
        3. Insert the new title<br>
        4. Press "Enter" or click outside the input field to confirm the new title
    </p>
    
    <h4 @click="toggleVisibility('changePO')">
            Change PO Date<span>{{ visibleSections.changePO ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changePO">
        1. Navigate to the project you wish to change PO Date of<br>
        2. In the top right corner, click the on the date underneath "PO Date:"<br>
        3. Select the new date<br>
        4. Click outside the field to confirm the new date
    </p>

    <h4 @click="toggleVisibility('changeScheduled')">
            Change Scheduled Finish Date<span>{{ visibleSections.changeScheduled ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changeScheduled">
        1. Navigate to the project you wish to change Scheduled Finish Date of<br>
        2. In the top right corner, click the on the date underneath "Scheduled Finish Date:"<br>
        3. Select the new date<br>
        4. Click outside the field to confirm the new date
    </p>
    
    <h4 @click="toggleVisibility('changePEM')">
            Change PEM<span>{{ visibleSections.changePEM ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changePEM">
        1. Navigate to the project you wish to change PEM of<br>
        2. In the top right corner, click on the name of the PEM (if no PEM is assigned it will show as "No PEM")<br>
        3. Insert the name of the PEM<br>
        4, Press "Enter" or click outside the field to confirm
    </p>
    
    <h4 @click="toggleVisibility('addGate')">
            Add a new gate<span>{{ visibleSections.addGate ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.addGate">
        If you wish to add a new gate to your project, do the following:<br>
        1. Navigate to the project in which you wish to add a gate <br>
        2. Hover your cursor inbetween two gates (A "+" icon should appear next to your cursor)<br>
        This is where the new gate will be added<br>
        3. Click with your mouse<br>
        4. Give the gate an appropriate title<br>
        5. Click "Create Gate"
    </p>

    <h4 @click="toggleVisibility('deleteGate')">
            Delete an existing gate<span>{{ visibleSections.deleteGate ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.deleteGate">If you wish to delete a gate from your projcet, do the following:<br>
        1. Navigate to the project in which you wish to delete a gate
        2. Find the gate you wish to delete<br>
        On the righthand side of the gatecard there should be an "X" symbol<br>
        3. Press the "X" symbol on the Gate<br>
        A message should show up<br>
        4. Select "Yes"
    </p>

     <h4 @click="toggleVisibility('gateTitle')">
            Change gate title<span>{{ visibleSections.gateTitle ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.gateTitle">
    1. Navigate to the project where the gate is located<br>
    2. Hover your mouse over the title of the gate and click with your mouse<br>
    The title should change to an input box<br>
    3. Give your gate a new title in the input box<br>
    4. Press "Enter"
    </p>

    <h4 @click="toggleVisibility('gatePosition')">
            Change the position of a gate<span>{{ visibleSections.gatePosition ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.gatePosition">When you are in a project, each gate should have a handle on the lefthand side of the gatecard<br>
        1. Hover your mouse over the handle<br>
        2. Press and hold down your left mouse button<br>
        3. Drag your gate to the desired position and let go of the left mouse button<br>
    </p>

    <h4 @click="toggleVisibility('addTask')">
            Add a new task<span>{{ visibleSections.addTask ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.addTask">
        If you wish to add a new task to your gate, do the following:<br>
        1. Navigate to the gate and dropdown its list of tasks<br>
        2. Hover your mouse inside the field where tasks should be listed (A "+" icon should appear next to your cursor)<br>
        3. Click with your mouse. A small window should appear with the title "New Task" up top<br>
        4. Give the task a title, responsible role and duration<br>
        5. Select "Create Task"
    </p>

    <h4 @click="toggleVisibility('deleteTask')">
            Delete an existing task<span>{{ visibleSections.deleteTask ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.deleteTask">
    If you wish to delete a task from a gate, do the following:<br>
        1. Navigate to the gate and dropdown its list of tasks<br>
        2. Find the task you wish to delete<br>
        On the righthand side of the taskcard there should be an "X" symbol<br>
        3. Press the "X" symbol on the task<br>
        A message should show up<br>
        4. Select "Yes"
    </p>
    
    <h4 @click="toggleVisibility('taskTitle')">
            Change task title<span>{{ visibleSections.taskTitle ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.taskTitle">
        1. Find the task you wish to change title of<br>
        2. Hover your cursor over the current task title<br>
        3. Click the task title<br>
        The title should change to an input box<br>
        4. Give the task a new title in the input box<br>
        5. Press "Enter"
    </p>

    <h4 @click="toggleVisibility('responsibleRole')">
        Change responsible role for a task<span>{{ visibleSections.responsibleRole ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.responsibleRole">
        1. Find the task you wish to change respnsible role of<br>
        2. Hover your cursor over the current responsible role of the task<br>
        3. Click the current responsible role of the task<br>
        The responsible role should change to an input box<br>
        4. Give the task a new respnsible role in the input box<br>
        5. Press "Enter" 
    </p>

    <h4 @click="toggleVisibility('taskDuration')">
        Change duration of a task<span>{{ visibleSections.taskDuration ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.taskDuration">
        1. Find the task you wish to change duration of<br>
        2. Hover your mouse over the task's duration<br>
        3. Click the current duration of the task<br>
        4. Give the task a new duration by typing the duration in the input field or changing ut with the "up" and "down" arrows
    </p>

    <h4 @click="toggleVisibility('taskPosition')">
        Change the position of a task<span>{{ visibleSections.taskPosition ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.taskPosition">
        When you have opened a gate, each task should have a handle on the lefthand side of the taskcard<br>
        1. Hover your mouse over the handle<br>
        2. Press and hold down your left mouse button<br>
        3. Drag your task to the desired position and let go of the left mouse button<br>
        The "Step" of the task should update accoridngly
    </p>
    <h4 @click="toggleVisibility('taskPosition')">
        Edit the stages of gates<span>{{ visibleSections.taskPosition ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.taskPosition">
        When you view a project on the dashboard we can see multiple bars on one line, these are stages
        Each bar has a weight and represents certain gates in that project
        You can edit how these stages look and act inside of a project or template
        1. Click in on a project or template
        2. Click the button in the lower left corner called "Project Settings"
        3. edit stages
        4. click the pluss icon to make a stage, these each represents on bar
        5. Write down on what gate the stage should start, but you have to have one stage that starts at 1
        6. Choose what color the stage bar should have (colors can be added in the admin page)
        7. Choose the name of the stage (this will be listed in the bar itself)
        8. set the weight of the bar
        The weight of a bar is how much space the bar should take, a stage with weight 4 will have 2 times the size of a stage with weight 1
    </p>

    <br>
    <h3 style="color:green">Superadmin</h3>

    <h4 @click="toggleVisibility('templateCreate')">
        Create a new template<span>{{ visibleSections.templateCreate? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.templateCreate">
        1. Navigate to the admin page<br>
        2. Click on the "Add a new Template" tab<br>
        3. Write down the name<br>
        4. Choose a template base, whether it is empty or clone an existing template<br>
        5. Choose what team the template is related to<br>
        Remember that the stages of the project, are easiest to decide here, than later on in one single project
    </p>
    <h4 @click="toggleVisibility('userList')">
        See list of users<span>{{ visibleSections.userList ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.userList">
        1. Navigate to the admin page by using the sidebar on the lefthand side of the webpage<br>
        2. Click on the "Users" tab<br>
        Here you should see a list of all users. It contains their username, team and role
    </p>

    <h4 @click="toggleVisibility('userTeam')">
        Change a user's team<span>{{ visibleSections.userTeam ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.userTeam">
        1. Navigate to the list of users<br>
        2. Find the user you wish to change the team of and click on the user's team<br>
        A dropdown table with different teamoptions should show up<br>
        3. Select the team you wish to change the user to   
        </p>

    <h4 @click="toggleVisibility('userRole')">
        Change a user's role<span>{{ visibleSections.userRole ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.userRole">
        1. Navigate to the list of users<br>
        2. Find the user you wish to change the role of and click on the user's role<br>
        3. Select the role you wish to change the user to
        </p>
    <h4 @click="toggleVisibility('deleteUser')">
        Delete an existing user<span>{{ visibleSections.deleteUser ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.deleteUser">
        1. Navigate to the list of users<br>
        2. Find the user you wish to delete<br>
        On the righthand side of the user card the should be an "X" symbol<br>
        3. Click on the "X" of the user you wish to delete<br>
        4. Select "Yes"
    </p>

    <h4 @click="toggleVisibility('addUser')">
        Add a new user<span>{{ visibleSections.addUser ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.addUser">
        If you wish to add a new user to the system, a user request will first have to be sent.
        See "Create User" for how to create a new user request<br>
        1. Navigate to the admin page and select "Incoming User Requests (x)"<br>
        If there is an existing user request, you should see it listed with "name" and "requested team"<br>
        2. Select "Approve"<br>
        A new user will automatically be given the role "User"
        </p>

    <h4 @click="toggleVisibility('addTeam')">
        Add a new team<span>{{ visibleSections.addTeam ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.addTeam">
        If you are in need of a new team for the application do the following:<br>
            1. Head to the adminpage<br>
            2. Select the "Teams" tab<br>
            A list of all teams in the application should show up<br>
            3. Click on "Add team"<br>
            4. Give the team it's team name<br>
            5. Select "Add"<br>
            You might have to refresh your browser in order to change to the team<br>
            When a new team is added there will be no existing projects for this team<br>
            The team will get it's own unique template. Make sure to change this to fit the team 
    </p>
    
    <h4 @click="toggleVisibility('deleteTeam')">
        Delete an existing team<span>{{ visibleSections.deleteTeam ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.deleteTeam">
        This action should be proceeded with extreme CAUTION. <br>
        Make sure this is the action you wish to pursure as all data linked to the team will be lost.<br>
        1. Head to the adminpage<br>
        2. Select the "Teams" tab<br>
        A list of all teams in the application should show up<br>
        3. Locate the correct team<br>
        On the righthand side of the team card the should be an "X" symbol <br>
        4. Click on the 'X'<br>
        A warning message should show up. Make sure you read the message and that the team name is correct<br>
        5. Select "Yes"<br>
        6. Complete the captcha test
    </p>

    <h4 @click="toggleVisibility('changePass')">
        Change admin and superadmin password<span>{{ visibleSections.changePass ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changePass">
            1. Navigate to the admin page<br>
            2. Click on the corresponding tabs<br>
            3. Follow the instrictions. Make sure "Capslock" is off
        </p>
        <h4 @click="toggleVisibility('changeTemplate')">
        Change the template<span>{{ visibleSections.changeTemplate ? '↓' : '→' }}</span>
    </h4>
    <p v-show="visibleSections.changeTemplate">
        Each new projected that is created for a team copies the team's template.<br>
        Each teams projects might differ and it's therefore important to alter the template to best fit your team.<br>
        Remember, if you wish to change a single project - changing the template won't help. Changing the template is for all future projects to be created!<br>
        To change the template of a team, do the following:<br>
            1. Make sure you are in the correct team. You can check this in the top right corner<br>
            2. Navigate to "System" using the sidebar<br>
            3. Select "Edit Template" in the bottom right corner<br>
            A "Warning Message" should show up. Make sure to read this before proceeding to the template<br>
            4. Make changes you wish to gates and tasks but make sure you are making the correct ones
        </p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

// Reactive object to manage visibility state of each section
const visibleSections = reactive({
  createUser: false,
  login: false,
  teams: false,
  dashboard: false,
  specificProject: false,
  gates: false,
  tasks: false,
  escalatedProjects: false,
  adminPage: false,
  changeTaskProgress: false,
  addProject: false,
  deleteProject: false,
  changeProjectTitle: false,
  changePO: false,
  changeScheduled: false,
  changePEM: false,
  addGate: false,
  deleteGate: false,
  gateTitle: false,
  gatePosition: false,
  addTask: false,
  deleteTask: false,
  taskTitle: false,
  responsibleRole: false,
  taskDuration: false,
  taskPosition: false,
  userList: false,
  userTeam: false,
  userRole: false,
  deleteUser: false,
  addUser: false,
  addTeam: false,
  deleteTeam: false,
  changePass: false,
  changeTemplate: false,


});

// Toggle visibility function
function toggleVisibility(section) {
  visibleSections[section] = !visibleSections[section];
}
</script>

<style>
h1 {
    font-size: xxx-large
    }
h2 {
    font-size:xx-large
}

h3 {
    font-size: x-large
}
h4 {
    cursor: pointer;
    font-size: large
}
h4 span {
    margin-left: 8px;
}
.startup-container {
  border-left: 4px solid blue; /* Blue line on the left side */
  padding-left: 10px; /* Add some padding to the left for spacing */
}
.navigation-container {
  border-left: 4px solid orange; /* Blue line on the left side */
  padding-left: 10px; /* Add some padding to the left for spacing */
}
.tooltip-container {
  border-left: 4px solid green; /* Blue line on the left side */
  padding-left: 10px; /* Add some padding to the left for spacing */
}
.group-container {
   padding-bottom: 2%;
}
</style>
