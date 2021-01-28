from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', avatarUrl='https://randomuser.me/api/portraits/men/6.jpg')
    seed_user1 = User(username='Amanda', email='amanda@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/62.jpg', bio="Amanda's bio")
    seed_user2 = User(username='Buddy', email='buddy@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/50.jpg'', bio="Buddy's bio")
    seed_user3 = User(username='Megan', email='megan@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/42.jpg', bio="Megan's bio")
    seed_user4 = User(username='Max', email='max@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/62.jpg', bio="Max's bio")
    seed_user5 = User(username='Jackie', email='jackie@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/16.jpg', bio="Jackie's bio")
    seed_user6 = User(username='Henry', email='henry@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/92.jpg', bio="Henry's bio")
    seed_user7 = User(username='Dez', email='dez@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/38.jpg', bio="Dez's bio")
    seed_user8 = User(username='Melissa', email='carmen@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/79.jpg', bio="Melissa's bio")
    seed_user9 = User(username='Lexi', email='lexi@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/47.jpg', bio="Lexi's bio")
    seed_user10 = User(username='Will', email='will@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/36.jpg', bio="Will's bio")

    seed_user1.followers.append(demo)
    seed_user2.followers.append(demo)
    seed_user3.followers.append(demo)
    seed_user4.followers.append(demo)
    seed_user5.followers.append(demo)
    seed_user6.followers.append(demo)
    seed_user7.followers.append(demo)
    seed_user8.followers.append(demo)
    seed_user9.followers.append(demo)
    seed_user10.followers.append(demo)

    db.session.add(demo)
    db.session.add(seed_user1)
    db.session.add(seed_user2)
    db.session.add(seed_user3)
    db.session.add(seed_user4)
    db.session.add(seed_user5)
    db.session.add(seed_user6)
    db.session.add(seed_user7)
    db.session.add(seed_user8)
    db.session.add(seed_user9)
    db.session.add(seed_user10)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# def undo_users():
#     db.session.execute('TRUNCATE users;')
#     db.session.commit()
