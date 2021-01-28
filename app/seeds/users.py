from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password', avatarUrl='https://insta-group-project.s3.amazonaws.com/default-avatar.jpg')
    seed_user1 = User(username='Amanda', email='amanda@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/3799Ffxy.jpeg', bio="Amanda's bio")
    seed_user2 = User(username='Buddy', email='buddy@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/bUkmHPKs.jpg', bio="Buddy's bio")
    seed_user3 = User(username='Megan', email='megan@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/46.jpg', bio="Megan's bio")
    seed_user4 = User(username='Max', email='max@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/95.jpg', bio="Max's bio")
    seed_user5 = User(username='Jackie', email='jackie@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/1H_7AxP0.jpg', bio="Jackie's bio")
    seed_user6 = User(username='Henry', email='henry@aa.io',
                      password='password', avatarUrl='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb', bio="Henry's bio")
    seed_user7 = User(username='Dez', email='dez@aa.io',
                      password='password', avatarUrl='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f', bio="Dez's bio")
    seed_user8 = User(username='Carmen', email='carmen@aa.io',
                      password='password', avatarUrl='https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=acddea1fd5f8d1eafd1fc300f280176c', bio="Carmen's bio")
    seed_user9 = User(username='Lexi', email='lexi@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/noplz47r59v1uxvyg8ku.png', bio="Lexi's bio")

    seed_user1.followers.append(demo)
    seed_user2.followers.append(demo)
    seed_user3.followers.append(demo)
    seed_user4.followers.append(demo)
    seed_user5.followers.append(demo)
    seed_user6.followers.append(demo)
    seed_user7.followers.append(demo)
    seed_user8.followers.append(demo)
    seed_user9.followers.append(demo)

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
