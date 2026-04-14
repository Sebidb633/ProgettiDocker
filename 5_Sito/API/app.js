require('dotenv').config();
const express = require('express');
const router = require('./routes/routes');
const path = require('path');
const { start } = require('repl');
const bcrypt = require('bcrypt');

const app = express();

// const helmet = require('helmet');
// app.use(helmet({
//     contentSecurityPolicy: false
// }))

app.use('/uploads', express.static(path.join(__dirname,'uploads')));

const startAdmin = async () => {
    try{
        const { default: AdminJS } = await import('adminjs');
        const { default: AdminJSExpress } = await import('@adminjs/express');
        const { Database, Resource, getModelByName } = await import('@adminjs/prisma');
        const { PrismaClient } = await import ('@prisma/client');

        const prisma = new PrismaClient();
        AdminJS.registerAdapter({ Database, Resource });

        const admin = new AdminJS({
            resources: [
                {
                    resource: { model: getModelByName('audio'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('classrooms'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('quizzes'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('descriptions'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('npcs'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('posters'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },
                {
                    resource: { model: getModelByName('statistics'), client: prisma },
                    options: {
                        navigation: { name: 'Statistiche' },
                        actions: {
                            new: { isAccessible: false },
                            delete: { isAccessible: false },
                        }
                    }
                },
                {
                    resource: { model: getModelByName('subjects'), client: prisma },
                    options: {
                        navigation: { name: 'Aule' },
                    }
                },            
            ],
            rootPath: '/admin',
            branding: {
                companyName: 'Database Admin Dashboard',
                logo: false,
            }
        });

        const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
            authenticate: async (email, password) => {
                console.log(`Tentativo di login per: ${email}`);
                try {
                    const user = await prisma.users.findUnique({
                        where: { email: email }
                    })

                    if (!user){
                        console.log("Utente non trovato")
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if (!passwordMatch) return null

                    return { email: user.email };
                } catch (error) {
                    console.error("ERRORE DURANTE IL LOGIN:", error);
                    return null;
                }
            },
                cookieName: 'adminjs',
                cookiePassword: process.env.ADMIN_COOKIE_SECRET,
            }, null, {
                resave: false,
                saveUninitialized: true,
                secret: process.env.ADMIN_COOKIE_SECRET,
                cookie: {
                    httpOnly: true,
                    secure: false, // Imposta a false per test in locale (http)
                }
        });

        app.use(admin.options.rootPath, adminRouter);
        
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use('/api', router);

        app.listen(4000, () => {
            console.log('API attiva sulla porta 4000')
        });
    } catch (err) {
        console.error("ERRORE FATALE DURANTE LO START:", err);
    }
};

startAdmin();