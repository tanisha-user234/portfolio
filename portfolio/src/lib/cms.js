import qs from 'qs';
// import {env} from 'dotenv';
// STRAPI_URL='http://localhost:1337'
// STRAPI_API_PATH='/api'
// BASE_URL=`${STRAPI_URL}${STRAPI_API_PATH}`
const query={
    populate:{
        Navbar:{
            populate:{
                navItems :true,
                SocialLinks:true
            }
        },
        HeroSection:{
            populate:{
                stats:true
            }
        },
        ExperienceSection:{
            populate:{
                experience :{
                    populate:{
                        tech:true
                    }
                }
            }
        },
        projectSection:{
            populate:{
                projects:{
                    populate:{
                        tech:true
                    }
                }
            }
        },
        skillsSection:{
            populate:{
                skills:true
            }
        },
        ContactSection:{
            populate:{
                ContactInfo:{
                    populate:{
                      ContactMethods:true,

                    }
                },
                 ContactForm :true
            }
        },
        footerSection:{
            populate:{
                socialLinks:true,
                bottomBar:true,
                backToTop:true
            }
        }
    }
}

const queryString= qs.stringify(query,{
    encodeValuesOnly:true
});

export async function fetchApi(path) {

    const requestUrl= `http://localhost:1337/api${path}${queryString ? '?' + queryString : '?'}`;
    const res= await fetch(requestUrl);
    if(!res.ok){
        throw new Error (`An error occurred while fetching the data: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(JSON.stringify(data));
    return data.data; 
}

// export const getDashBoard= async()=>{
//     try {
//         const data= await fetchData('/api/dashboard');
//         if(data.data && data.data.length>0){
//             const heroSection=data.data.heroSection;
//             const 
//             return{

//             }
//         }
        
//     } catch (error) {
        
//     }
// }