/* Temp Database */

/* Account Information Table */
CREATE TABLE dbo.tblUsers 
(
    UserID INT,
    FirstName VARCHAR,
    LastName VARCHAR,
    Email NVARCHAR,
    Username NVARCHAR,
    Password NVARCHAR
    PRIMARY KEY(UserID)
);

/* Indie Games Table */

CREATE TABLE dbo.tblGames
(
    GameID INT,
    GameName NVARCHAR,
    CreatorID INT,
    Review VARCHAR,
    Rating INT
    PRIMARY KEY(GameID)
    FOREIGN KEY(UserID) REFERENCES dbo.tblUsers(UserID)
);

INSERT INTO dbo.tblGames
    (GameID, GameName, CreatorID, Review, Rating)
VALUES
(0, 'Disco Elysium', 0, 'Good', 5);
/* To be continued */