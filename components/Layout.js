
import { useRouter } from 'next/router';
import LinkItem from './Header/LinkItem';
import {links} from './Header/links';
const Layout = (props)=>{
    const router = useRouter();
    for(var i=0;i<links.length;i++){
        if(links[i].path === router.pathname){
            links[i]['isActive'] = true;
        }else{
            links[i]['isActive'] = false;
        }
    }
    return (
        <div className="container">
        <div className="header">
            <div className="menu">
                <h1 className="title">Blog</h1>
                <ul className="links">
                    {
                        links.map(function(item,index){
                            return <LinkItem 
                                path={item.path} 
                                icon={item.icon} 
                                text={item.text}
                                key={index}
                                isActive={item.isActive} 
                            />
                        })
                    }
                </ul>
                <div>
                </div>
            </div>
        </div>
        {props.children}
        <style jsx>{`
            *{
                margin:0;
                padding:0;
                font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
            }
            h1,a {
                font-family: 'Arial';
            }
            ul {
                padding: 0;
                overflow:hidden;
                line-height:48px;
            }
            
            .menu{
                width: 723px;
                margin: 0 auto;
                overflow:hidden;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .header{
                background: #1B1C1D;
                color: rgba(255,255,255,.9);
            }
            .title{
                float:left;
                color: #00B5AD;
                font-size:24px;
                
                padding:19px 22px;
            }
            .links{
                float:left;
                overflow:hidden;
            }
            
    `}</style>
    </div>
    )
}

export default Layout;
