# Harding Point : Engagement Manager
 
 
Engagement Manager allows you to quickly ochestrate customer, device, backoffice, and app engagement. By utilizing
proven open source technologies allow customers to reduce time to market, burden, liability, and ultimately risk.

<br/>
<hr/>

<center>
<b>Deploy Button Will <font color="red">NOT</font> Work Ultil Add-On Approval</b>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 

<b>OR</B>

[Visit Heroku Add-On Marketplace](https://elements.heroku.com/addons/engagementgraph)

</center>

<hr/>

<br/>

[Live Demo - Login with readonly/readonly](https://engagementmanager.herokuapp.com)

[![Harding Point Engagement Manager](https://static.wixstatic.com/media/983560_c5c91d5d1280442180cb1cce09d1368e~mv2_d_2840_1450_s_2.png/v1/fill/w_2120,h_1000,al_c,usm_0.66_1.00_0.01/983560_c5c91d5d1280442180cb1cce09d1368e~mv2_d_2840_1450_s_2.png)](https://engagementmanager.herokuapp.com/)

<br/>
<br/>



[Engagement Graph](http://www.HardingPoint.com) quickly builds and connects your Salesforce data with all your data 
islands.  The [Engagement Graph](http://www.HardingPoint.com) is used for deep analytics, artificial intelligence, 
reporting, and App Development. The more data and relationships you link with your [Engagement Graph](http://www.HardingPoint.com) 
the quicker it builds, learns (via AI), and reacts (via Engagement Manager) from your [Neural Network](http://www.HardingPoint.com).

* [`Graph Connect Deploy`](https://graphconnect.herokuapp.com/) - Live Graph Connect  (Recommend following instructions below, if first time)
* [`Engagement Manager & Orchestration` - Login: readonly/readonly](http://engage.hardingpoint.com/) - Uses Additional Package with your Engagement Graph
* [`Engagement Browser` - Try Custom App Demo Now ](https://engagementbrowser.herokuapp.com/?neoid=0011I000003ExJzQAK) - Powered by Graph Connect - Synchronized from Salesforce
* `Neural Network & AI` - Uses Additional Package on Top with your Engagement Graph
* `Analytics & Reporting` - Uses Additional Package with your Engagement Graph


![Harding Point Engagement Graph](https://static.wixstatic.com/media/983560_7563ad3d347646e1a792e19a2c14e44c~mv2_d_2754_1836_s_2.png/v1/fill/w_1545,h_1030,al_c,usm_0.66_1.00_0.01/983560_7563ad3d347646e1a792e19a2c14e44c~mv2_d_2754_1836_s_2.png "Harding Point Graph Connect")


# Installation Instructions

1. <a href="https://id.heroku.com/login" target="_new">Login to Heroku</a> or <a href="https://signup.heroku.com" target="_new">Create Heroku Credentials</a>

1. <a href="https://login.salesforce.com" target="_new">Login to Salesforce</a> or <a href="https://developer.salesforce.com/signup" target="_new">Create Salesforce Developer Edition</a>

1. <a href="https://login.salesforce.com/lightning/switcher?destination=classic" target="_new">Switch to Salesforce Classic</a>
        
1. <a href="https://login.salesforce.com/setup/ui/listCustomSettings.apexp" target="_new">Create a Salesforce Custom Setting</a>
    1. Create Salesforce.com Custom Setting `HardingPoint as Hierarchy/Public`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:ApiToken Field Type: Text(255)`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:GatewayToken Field Type: Text(255)`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:graphdburl Field Type:URL Click Save`
    <!-- 1. Create New Custom Field in HardingPoint Custom Setting `Name:APIURL Field Type: URL` -->

1. ##### Check email for Alpha Invite `Will Be Removed After Release`
    1. Install `engagementgraph` after receiving the Alpha invite from Heroku.  Command below.
        1. [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
        1. Running at Terminal or Command Prompt (After installing Heroku CLI)
            1. heroku login
            1. heroku addons:create engagementgraph:test --app YOUR_APP_NAME_HERE

1. <a href="https://login.salesforce.com/setup/ui/listCustomSettings.apexp" target="_new">Update Custom Settings</a>
    1. Click on HardingPoint
    1. Click on Manage
    1. Click on New Default Organization Level Value
    1. Update `GatewayToken` with `ENGAGEMENTGRAPH_GATEWAYTOKEN` from Heroku Config Variables
    1. Update `ApiToken` with `ENGAGEMENTGRAPH_APITOKEN` from Heroku Config Variables
        1. Request Early Access by emailing EarlyAccess@HardingPoint.com your Heroku Username 
        1. All Alpha testers will be given free access
    1. Update `graphdburl` with `GRAPHCONNECT_URL` from Heroku Config Variables (You can use any Neo4j URL)
    <!-- 1. Update `APIURL` with `ENGAGEMENTGRAPH_APIURL` from Heroku Config Variables -->
        
# Deploying Graph Connect for Accounts

1. https://graphconnect.herokuapp.com/ or [Install your Own](https://github.com/HardingPoint/graphconnect)

1. Click [`Login via Salesforce - Normal Instance`]

    1. If you get a `Routing` error it is because Salesforce has not finished updating (wait 4 minutes)

1. Select SObject `Account` from SObject Dropdown

1. Click [`Connect to Graph`]

(It will automatically process the history)

Repeat steps 1-4 for Contact, Opportunity, Case 
<i>(Processing order matters creating relationships)</i>

![Harding Point Connecth](https://static.wixstatic.com/media/983560_433e31decb984e7caba4de2bcc4e8a54~mv2_d_3076_1874_s_2.png/v1/fill/w_1897,h_1156,al_c,usm_0.66_1.00_0.01/983560_433e31decb984e7caba4de2bcc4e8a54~mv2_d_3076_1874_s_2.png)


# View Graph
    
    1. Go back to your Heroku Dashboard and into <YOUR_APP_NAME>
    1. Click Resources
    1. Click GrapheneDB
        1. Scroll to bottom click `Launch` for Neo4j Browser
        1. Click Icon Top Left Corner
        1. You should see your object listed Click on it (ex Account)
        
        
# Reproducing Engagement Graph From Above Image

    1. Deploy Graph Connect Account (Did above already)
    1. Deploy Graph Connect Contact
    1. Deploy Graph Connect Opportunity
    1. Deploy Graph Connect Case
    
        
# Cleaning Graph

When you deploy Graph Connect it automatically processes the history.

##### Delete All Data
    MATCH (n)
    DETACH DELETE n
    
    (Be Careful This Deletes Everything)
    
##### Delete One Node with Relationships
    MATCH (n { name: 'Andres' })
    DETACH DELETE n
    
##### Deleting Using the Salesforce Id
    
    MATCH (n { Id: '00Q1I000001xNBdUAM' })
    DETACH DELETE n
    
# Querying Data

##### Matching By Id

    MATCH (n{Id:'0010x000002IHpJAAW'}) return n;

##### Matching Node and Relationships

    MATCH (n{Id:'0010x000002IHpJAAW'})-[r]-(b) return b.name, labels(b);
    

##### Return Node and All Relationships

    MATCH (c:Account{sfdcid:"0013900001ZglUQAAZ"}) 
    WITH c
    OPTIONAL MATCH (c)-[r]-()
    RETURN c, r
   

##### Return Node with most Relationships it points to <font color="blue">(n)-[r]-<font color="red">></font>(x)</font>

    MATCH (n)-[r]->(x)
    RETURN n, COUNT(r)
    ORDER BY COUNT(r) DESC
    LIMIT 5

##### Return Node with most Relationships pointing to it <font color="blue">(n)<font color="red"><</font>-[r]-(x)</font>
    
    MATCH (n)<-[r]-(x)
    RETURN n, COUNT(r)
    ORDER BY COUNT(r) DESC
    LIMIT 5
    
    
#### Salesforce Specific Queries

##### Accounts with most Opportunities

    MATCH (n:Account)<-[r]-(x:Opportunity)
    RETURN n, COUNT(r)
    ORDER BY COUNT(r) DESC
    LIMIT 5
    
    
##### Accounts with most Cases

    MATCH (n:Account)<-[r]-(x:Case)
    RETURN n, COUNT(r)
    ORDER BY COUNT(r) DESC
    LIMIT 5