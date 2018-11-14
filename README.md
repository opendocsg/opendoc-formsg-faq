# Getting started with OpenDoc

Step 1:
Create a new repo, the name of the repo should follow the convention:

`opendoc-<name_of_document>`

Step 2:
Clone the template repo onto your local machine

```
git clone https://github.com/opendocsg/opendoc-template.git
```

Step 3: 
Change the remote url for the repo on your local machine

```
git remote set-url origin https://github.com/opendocsg/opendoc-<name_of_document>.git
```

Step 4: 
Add your converted markdown files into the root directory of the repo

Step 5: 
Update the following fields in the _config.yml file:
- title (Required)
- repository (Required)
- section_order (Optional)
- styling_options
	- primary_brand_color (Optional)
	- logo_path (Optional)

Step 6: 
Commit your changes 

```
git add .
git commit -m <commit_message>
```

Step 7:
Push your changes to the remote branch

```
git push origin master
```
