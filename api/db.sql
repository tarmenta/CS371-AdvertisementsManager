CREATE TABLE categories(
	category_id	VARCHAR(5) PRIMARY KEY,
	category_name VARCHAR(40)
);

CREATE TABLE statuses(
	status_id	VARCHAR(2) PRIMARY KEY,
	status_name VARCHAR(20)
);

CREATE TABLE users(
	user_id	VARCHAR(20) PRIMARY KEY,
	user_first_name VARCHAR(40),
    user_last_name VARCHAR(40)
);

CREATE TABLE moderators(
	user_id	VARCHAR(20) PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE RESTRICT 
);

CREATE TABLE advertisements(
	advertisement_id INT PRIMARY KEY,
    advertisement_title VARCHAR(100),
    advertisement_details VARCHAR(100),
    advertisement_date DATE,
    price INT,
    user_id	VARCHAR(20),
    moderator_id VARCHAR(20),
    category_id	VARCHAR(5),
    status_id	VARCHAR(2),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (moderator_id) REFERENCES moderators(user_id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE RESTRICT,
    FOREIGN KEY (status_id) REFERENCES statuses(status_id) ON DELETE RESTRICT
);
