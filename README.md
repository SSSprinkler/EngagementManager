[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 

# Harding Point : Engagement Manager
 
 
Engagement Manager allows you to quickly ochestrate customer, device, backoffice, and app engagement. By utilizing
proven open source technologies allow customers to reduce time to market, burden, liability, and ultimately risk.

## Engagement Manager : Credentials

1. Click on "Settings" in your App in Heroku
1. Click Reveal Config Vars
1. Admin User/Pwd - ENGAGEMENTGRAPH_ADMINUSER / ENGAGEMENTGRAPH_ADMINPWD 
1. Read Only User/Pwd - ENGAGEMENTMANAGER_READONLYUSER / ENGAGEMENTMANAGER_READONLYPWD

<hr/>

[Live Demo - Login with readonly/readonly](https://engagementmanager.herokuapp.com)

[![Harding Point Engagement Manager](https://static.wixstatic.com/media/983560_c5c91d5d1280442180cb1cce09d1368e~mv2_d_2840_1450_s_2.png/v1/fill/w_2120,h_1000,al_c,usm_0.66_1.00_0.01/983560_c5c91d5d1280442180cb1cce09d1368e~mv2_d_2840_1450_s_2.png)](https://engagementmanager.herokuapp.com/)

<br/>
<br/>



[Engagement Graph](http://www.HardingPoint.com) quickly builds and connects your Salesforce data with all your data 
islands.  The [Engagement Graph](http://www.HardingPoint.com) is used for deep analytics, artificial intelligence, 
reporting, and App Development. The more data and relationships you link with your [Engagement Graph](http://www.HardingPoint.com) 
the quicker it builds, learns (via AI), and reacts (via Engagement Manager) from your [Neural Network](http://www.HardingPoint.com).

* [`Engagement Manager`](https://engagementmanager.herokuapp.com) - <b>Instructions Below</b>
* [`Graph Connect Deploy`](https://graphconnect.herokuapp.com/) - <b>Instructions Below</b>
* `Neural Network & AI` - Additional Package with your Engagement Graph
* `Analytics & Reporting` - Additional Package with your Engagement Graph


<Br/>

# Harding Point : Graph Connect

Synchrionize your Salesforce data with industry leading open source graph database. Utilize the engagement graph to build, extend, and drive your customer engagement.

## Installation Instructions

1. <a href="https://id.heroku.com/login" target="_new">Login to Heroku</a> or <a href="https://signup.heroku.com" target="_new">Create Heroku Credentials</a>

1. <a href="https://login.salesforce.com" target="_new">Login to Salesforce</a> or <a href="https://developer.salesforce.com/signup" target="_new">Create Salesforce Developer Edition</a>

1. <a href="https://login.salesforce.com/lightning/switcher?destination=classic" target="_new">Switch to Salesforce Classic</a>
        
1. <a href="https://login.salesforce.com/setup/ui/listCustomSettings.apexp" target="_new">Create a Salesforce Custom Setting</a>
    1. Create Salesforce.com Custom Setting `HardingPoint as Hierarchy/Public`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:ApiToken Field Type: Text(255)`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:GatewayToken Field Type: Text(255)`
    1. Create New Custom Field in HardingPoint Custom Setting `Name:graphdburl Field Type:URL Click Save`
    <!-- 1. Create New Custom Field in HardingPoint Custom Setting `Name:APIURL Field Type: URL` -->

1. <a href="https://login.salesforce.com/setup/ui/listCustomSettings.apexp" target="_new">Update Custom Settings</a>
    1. Click on Manage
    1. Click on New Default Organization Level Value
    1. Update `GatewayToken` with `ENGAGEMENTGRAPH_GATEWAYTOKEN` from Heroku Config Variables
    1. Update `ApiToken` with `ENGAGEMENTGRAPH_APITOKEN` from Heroku Config Variables
        1. Request Early Access by emailing EarlyAccess@HardingPoint.com your Heroku Username 
        1. All Alpha testers will be given free access
    1. Update `graphdburl` with `GRAPHCONNECT_URL` from Heroku Config Variables (You can use any Neo4j URL)
    <!-- 1. Update `APIURL` with `ENGAGEMENTGRAPH_APIURL` from Heroku Config Variables -->
        
    
        
![Harding Point Engagement Graph](https://static.wixstatic.com/media/983560_7563ad3d347646e1a792e19a2c14e44c~mv2_d_2754_1836_s_2.png/v1/fill/w_1545,h_1030,al_c,usm_0.66_1.00_0.01/983560_7563ad3d347646e1a792e19a2c14e44c~mv2_d_2754_1836_s_2.png "Harding Point Graph Connect")
        
        
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
    

# Querying Data

When you deploy Graph Connect it automatically processes the history. Always use both sfdcorgid and sfdcid, GraphConnect
supports loading multiple Salesforce instances into a single graph database. Below are sample queries.


##### Matching By Id

    MATCH (n{  sfdcorgid: '00D390000005LxxEAE', sfdcid: '0013900001ZglUaAAJ' }) 
    RETURN n;

##### Matching Node and Relationships

    MATCH (n{ sfdcorgid: '00D390000005LxxEAE', sfdcid: '0013900001ZglUaAAJ' })-[r]-(b) 
    RETURN b.name, labels(b);
    

##### Return Node and All Relationships

    MATCH (c:Account{  sfdcorgid: '00D390000005LxxEAE', sfdcid: '0013900001ZglUaAAJ' }) 
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

# Cleaning Graph


##### Delete All Data
    MATCH (n)
    DETACH DELETE n
    
    (Be Careful This Deletes Everything)
    
##### Delete One Node with Relationships
    MATCH (n { name: 'Andres' })
    DETACH DELETE n
    
##### Deleting Using the Salesforce Id
    
    MATCH (n {  sfdcorgid: '00D390000005LxxEAE', sfdcid: '0013900001ZglUaAAJ' })
    DETACH DELETE n
    
    
    
<hr/>    
    
    
[Visit Heroku Add-On Marketplace](https://elements.heroku.com/addons/engagementgraph)
    