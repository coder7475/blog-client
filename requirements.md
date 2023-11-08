# Programmers Blog

## Main Requirements

### Home Page:

1. Navbar: Home, Add Blog, All Blogs, Featured Blogs, Wishlist, login, Registerm [Done]
    - If the user is not logged in, the Login and Register button should show, and if the
    user is logged in show his profile picture and logout button [Done]
2. Banner: Hero Section = Text + Image [Done]
3. Recent Blog Posts: 
    1. Show 6 blog Post
        1. Each blog has a title, image, short description, category, details button and wishlist button [Done]
        2. Details button will take to Blog Details Page [Done]
        3. Clicking wishlist button will add the blog on wishlist [Done]
        4. Add time of posting into database with current time  [Done]
        5. Sorting blogs by date or time [Done]
4. Featured Post Section: [https://www.hackerrank.com/blog/](https://www.hackerrank.com/blog/)
5. Newsletter Section [Done]
    1. Have an input of email and submit button
        1. SHOW TOAST on successful submission with message “Thank You for subscibing to our newsletter”
6. About Me: A bio and message from blog owner [Done]
7. Footer [Done]

### All Blogs Page

1. All Blog Post are shown : Use Pagination [Done]
2. Filter by category. [Done]
3. Search Field to search blogs by blog title [Done]
4. Blogs have: title, image, short description, category, details button and wishlist button [Done]
5. Details button [Done]
6. wishlist button [Done]

### Featured Blogs Page:

1. Table with Top 10 posts [Done]
2. Top posts are based on word count of the long_description [Done]
3. Table Row: Serial Number, Blog Titlee, Blog Owner, Profile Picture [Done]
4. Table Library: Ka-table, React-data-table, Mui-datatables, react-table-library [Done]


### Blog Details Page

1. Information about the blog: [Done]
    1. title
    2. image
    3. short description
    4. long description
2. A textarea: Comment with comment owner name and profile picture: Create a comment collection [Done]
3. Comment Collection will have: _id, user name, profile picture. Filter by _id in backend [Done]
4. User cannot comment on his/her own blog. Show toast for it [Done]
5. all the comments with comment owner name and profile picture will be shown in the comment section [Done]
6. If user is blog owner he or she can update the blog using update button. [Done]

### Add Blog Page:

1. Form will take blog infos like: [Done]
    1. title
    2. image url
    3. category: Dropdown 
    4. short description
    5. long description
    6. Submit Button
2. Category with a drop down [Done]

### Update Blog Page:

1. Private Route [Done]
2. Only usable when clicked update button [Done]
3. Reload Functionality: Upon loading stay on the page [Done]

### Wishlist Page:

1. In this page show all the blogs wishlisted by a specific user. [Done]
2. Blog : title, image, short discription, category, details button and remove wishlist button [Done]

### Authentication:

1. Add 404 page [Done]
2. Email and password based Auth(Firebase) [Done]
3. Signin by Google(firebase) [Done]
4. Login page: display error with sweet alert [Done]
5. Registration page: display error for password when: [Done]
    1. password is less than 6 characters
    2. don’t capital letter
    3. don’t have a special character
    4. don’t have a numeric character

## Bonus

0. README file with feature name [Done]
1. Title with favicon [Done]
2. Frame Motion package: At least on one section
3. Use toasts or sweet alert on crud operations - login and registration [Done]
4. JWT Authentication
5. Responsive web design

### Optional:

1. Use react-loading-skeleton in place of loading spinners [Done]
2. Use react-photo-view to make the image in full screen preview mode [Done]
