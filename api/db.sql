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
    price DECIMAL(10,2),
    user_id	VARCHAR(20),
    moderator_id VARCHAR(20),
    category_id	VARCHAR(5),
    status_id	VARCHAR(2),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (moderator_id) REFERENCES moderators(user_id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE RESTRICT,
    FOREIGN KEY (status_id) REFERENCES statuses(status_id) ON DELETE RESTRICT
);

INSERT INTO categories (category_id, category_name) VALUES
('CAT', 'Cars and Trucks'),
('HOU', 'Housing'),
('ELC', 'Electronics'),
('CCA', 'Child Care');

INSERT INTO statuses (status_id, status_name) VALUES
('PN', 'Pending'),
('AC','Active'),
('DI','Disapproved');

INSERT INTO users (user_id, user_first_name, user_last_name) VALUES
('Jsmith', 'John', 'Smith'),
('Ajackson', 'Ann', 'Jackson'),
('Rkale', 'Rania', 'Kale'),
('Sali', 'Samir', 'Ali');

INSERT INTO moderators (user_id) VALUES
('Jsmith'),
('Ajackson');

INSERT INTO advertisements (advertisement_id, advertisement_title, advertisement_details, advertisement_date, price, category_id, user_id, moderator_id, status_id) VALUES
(1, '2010 Sedan Subaru', '2010 sedan car in great shape for sale', '2017-02-10', 6000, 'CAT', 'Rkale', 'Jsmith', 'AC'),
(2, 'Nice Office Desk', 'Nice office desk for sale', '2017-02-15', 50.25, 'HOU', 'Rkale', 'Jsmith', 'AC'),
(3, 'Smart LG TV for $200 ONLY', 'Smart LG TV 52 inches! Really cheap!', '2017-03-15', 200, 'ELC', 'Sali', 'Jsmith', 'AC'),
(4, 'HD Tablet for $25 only', 'Amazon Fire Tablet HD', '2017-03-20', 25, 'ELC', 'Rkale', NULL, 'PN'),
(5, 'Laptop for $100', 'Amazing HP laptop for $100', '2017-03-20', 100, 'ELC', 'Rkale', NULL, 'PN');
