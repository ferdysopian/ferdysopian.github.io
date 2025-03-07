(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{45:function(e,t,i){Promise.resolve().then(i.bind(i,8375))},8375:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ei}});var a=i(7437),s=i(9303),r=i(2455),n=i(2265);function o(){let[e,t]=(0,n.useState)({x:0,y:0}),[i,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})},i=e=>{("A"===e.target.tagName||"BUTTON"===e.target.tagName)&&r(!0)},a=()=>{r(!1)};return window.addEventListener("mousemove",e),document.addEventListener("mouseenter",i,!0),document.addEventListener("mouseleave",a,!0),()=>{window.removeEventListener("mousemove",e),document.removeEventListener("mouseenter",i,!0),document.removeEventListener("mouseleave",a,!0)}},[]),(0,a.jsx)(s.E.div,{className:"fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference",animate:{x:e.x-8,y:e.y-8,scale:i?2:1},transition:{type:"spring",stiffness:500,damping:28,mass:.5},children:(0,a.jsx)("div",{className:"w-full h-full bg-white rounded-full"})})}var l=i(4135),c=i(3088),d=i(1350),m=i(7256),p=i(9213),u=i(7042),x=i(4769);function h(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,x.m6)((0,u.W)(t))}let f=(0,p.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),g=n.forwardRef((e,t)=>{let{className:i,variant:s,size:r,asChild:n=!1,...o}=e,l=n?m.g7:"button";return(0,a.jsx)(l,{className:h(f({variant:s,size:r,className:i})),ref:t,...o})});function v(){let{theme:e,setTheme:t}=(0,d.F)();return(0,a.jsxs)(g,{variant:"ghost",size:"icon",onClick:()=>t("light"===e?"dark":"light"),className:"fixed top-4 right-4 z-50",children:[(0,a.jsx)(l.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(c.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}g.displayName="Button";var y=i(1393),b=i(3298),j=i(1295),w=i(7461),N=i(8004);let k=[{icon:b.Z,href:"https://github.com/ferdysopian",label:"GitHub",color:"hover:text-[#333]"},{icon:j.Z,href:"mailto:dev.ferdysopian@gmail.com",label:"Email",color:"hover:text-[#EA4335]"},{icon:w.Z,href:"https://www.linkedin.com/in/ferdy-s",label:"LinkedIn",color:"hover:text-[#0077B5]"}];function E(){let[e,t]=(0,n.useState)(!1),[i,r]=(0,n.useState)(!1),o=(0,n.useRef)(null);return((0,n.useEffect)(()=>{r(!0);let e=e=>{o.current&&!o.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),i)?(0,a.jsx)("div",{className:"fixed max-md:right-4 max-md:bottom-4 md:left-8 md:top-1/2 md:-translate-y-1/2 z-50",ref:o,children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(s.E.button,{className:"w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/20 transition-colors",onClick:()=>t(!e),whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,a.jsx)(N.Z,{className:"w-5 h-5"})}),(0,a.jsx)(y.M,{mode:"wait",children:e&&(0,a.jsx)(s.E.div,{className:"absolute right-0 bottom-16 md:left-0 md:top-0 md:pt-16 space-y-4 z-[-1]",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},children:k.map((e,t)=>{let i=e.icon;return(0,a.jsxs)(s.E.a,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"block w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center transition-colors ".concat(e.color),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2,delay:.05*t},whileHover:{scale:1.1,y:-2},whileTap:{scale:.9},children:[(0,a.jsx)(i,{className:"w-5 h-5"}),(0,a.jsx)("span",{className:"sr-only",children:e.label})]},e.label)})})})]})}):null}var S=i(7972),P=i(6142),D=i(8203);function C(){return(0,a.jsx)("section",{id:"about",className:"min-h-screen py-20 px-4 md:px-8",children:(0,a.jsxs)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"max-w-4xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-8",children:"About Me"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[(0,a.jsx)(s.E.div,{initial:{x:-50,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.8},viewport:{once:!0},children:(0,a.jsx)("div",{className:"aspect-square rounded-2xl overflow-hidden",children:(0,a.jsx)("img",{src:"/images/profile.jpeg",alt:"Profile",className:"w-full h-full object-cover"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(s.E.p,{initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8},viewport:{once:!0},className:"text-base md:text-lg mb-6",children:"Experienced Software Engineer with a strong background in full-stack web development, specializing in PHP, JavaScript (React.js, Node.js), and WordPress customization. Adept at building responsive, scalable, and high-performance applications, optimizing website speed for large-scale environments, and integrating SEO best practices. Proven leadership in team collaboration, code optimization, and modern development workflows. Passionate about open-source contributions, continuous learning, and staying ahead in web technologies."}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(S.Z,{className:"w-5 h-5 text-primary"}),(0,a.jsx)("span",{children:"Ferdy Sopian"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(P.Z,{className:"w-5 h-5 text-primary"}),(0,a.jsx)("span",{children:"Bali, ID"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(D.Z,{className:"w-5 h-5 text-primary"}),(0,a.jsx)("span",{children:"6+ Years Experience"})]})]})]})]}),(0,a.jsxs)("div",{className:"mt-20",children:[(0,a.jsx)("h3",{className:"text-2xl font-bold mb-8",children:"Experience Timeline"}),(0,a.jsx)("div",{className:"space-y-12",children:[{year:"Jan 2024 - Present",title:"Full Stack Developer",company:"Polar Mass - WordPress Development Agency",location:"San Diego, CA (Remote)",description:"Develop and maintain WordPress websites for multiple clients, ensuring high performance and scalability. Implement SEO strategies to improve search rankings and drive organic traffic. Manage AWS cloud infrastructure for seamless hosting and deployment. Lead confidential development projects using the MERN stack, delivering innovative and efficient solutions."},{year:"Oct 2023 - Dec 2023",title:"Freelance WordPress Developer",company:"Polar Mass - WordPress Development Agency",location:"San Diego, CA (Remote)",description:"Designed and customized WordPress themes and plugins to enhance functionality and user experience. Provided technical support and implemented performance optimization strategies to improve website speed, security, and SEO rankings."},{year:"Jul 2023 - Dec 2023",title:"Web Developer",company:"Blackbird Media Singapore",location:"Singapore (Remote)",description:"Developed responsive and user-friendly websites for clients in various industries. Ensured cross-browser compatibility and optimized site performance for a seamless user experience."},{year:"Apr 2023 - Jun 2023",title:"Freelance Web Developer",company:"Blackbird Media Singapore",location:"Singapore (Remote)",description:"Assisted in front-end and back-end development tasks, contributing to the creation of dynamic and high-quality web applications."},{year:"Jun 2019 - Jun 2023",title:"Project Lead Developer",company:"Jegstudio",location:"Bali, ID (Onsite)",description:"Led a team of developers in building custom web applications, overseeing project workflows, and ensuring high-quality code. Developed new features, conducted code reviews, and optimized development processes."},{year:"Oct 2018 - May 2019",title:"Software Developer",company:"Jegstudio",location:"Bali, ID (Onsite)",description:"Developed and maintained web applications, troubleshooting issues, enhancing functionality, and improving overall performance."}].map((e,t)=>(0,a.jsxs)(s.E.div,{initial:{x:t%2==0?-50:50,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.8},viewport:{once:!0},className:"relative pl-8 border-l-2 border-primary",children:[(0,a.jsx)("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"}),(0,a.jsx)("span",{className:"text-sm text-primary",children:e.year}),(0,a.jsx)("h4",{className:"text-xl font-bold mt-2",children:e.title}),(0,a.jsx)("p",{className:"text-muted-foreground",children:e.company}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.location}),(0,a.jsx)("p",{className:"mt-2",children:e.description})]},t))})]})]})})}let z=[{category:"Frontend",items:["React","Next.js","TypeScript","Tailwind CSS","Framer Motion","HTML","CSS"]},{category:"Backend",items:["Node.js","Express","PostgreSQL","MongoDB","GraphQL","PHP Programming","WordPress Development","MySQL","Rest API"]},{category:"Tools & Others",items:["Git","Docker","AWS","CI/CD","Agile","Linux Servers","Web Scraping","Google Chrome Extension","Shell Script"]}];function I(){return(0,a.jsx)("section",{id:"skills",className:"min-h-screen bg-muted/30 py-20 px-4 md:px-8",children:(0,a.jsxs)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"max-w-4xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-12",children:"Skills"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:z.map((e,t)=>(0,a.jsxs)(s.E.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.2*t},viewport:{once:!0},className:"space-y-6",children:[(0,a.jsx)("h3",{className:"text-2xl font-bold",children:e.category}),(0,a.jsx)("div",{className:"space-y-4",children:e.items.map((e,t)=>(0,a.jsx)(s.E.div,{initial:{width:0},whileInView:{width:"100%"},transition:{duration:1,delay:.1*t},viewport:{once:!0},className:"relative h-12 bg-background rounded-lg overflow-hidden",children:(0,a.jsx)(s.E.div,{whileHover:{scale:1.02},className:"absolute inset-0 flex items-center px-4 bg-primary/10 cursor-pointer",children:(0,a.jsx)("span",{className:"font-medium",children:e})})},t))})]},t))})]})})}var R=i(8441),Z=i(2505),A=i(9057),L=i(5589),F=i(3711);let W=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("div",{ref:t,className:h("rounded-lg border bg-card text-card-foreground shadow-sm",i),...s})});W.displayName="Card";let M=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("div",{ref:t,className:h("flex flex-col space-y-1.5 p-6",i),...s})});M.displayName="CardHeader";let O=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("h3",{ref:t,className:h("text-2xl font-semibold leading-none tracking-tight",i),...s})});O.displayName="CardTitle";let T=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("p",{ref:t,className:h("text-sm text-muted-foreground",i),...s})});T.displayName="CardDescription";let V=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("div",{ref:t,className:h("p-6 pt-0",i),...s})});V.displayName="CardContent";let J=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)("div",{ref:t,className:h("flex items-center p-6 pt-0",i),...s})});J.displayName="CardFooter";var H=i(1704),B=i(2549);let _=H.fC;H.xz;let G=H.h_;H.x8;let Y=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)(H.aV,{ref:t,className:h("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",i),...s})});Y.displayName=H.aV.displayName;let q=n.forwardRef((e,t)=>{let{className:i,children:s,...r}=e;return(0,a.jsxs)(G,{children:[(0,a.jsx)(Y,{}),(0,a.jsxs)(H.VY,{ref:t,className:h("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",i),...r,children:[s,(0,a.jsxs)(H.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(B.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});q.displayName=H.VY.displayName;let Q=e=>{let{className:t,...i}=e;return(0,a.jsx)("div",{className:h("flex flex-col space-y-1.5 text-center sm:text-left",t),...i})};Q.displayName="DialogHeader";let U=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)(H.Dx,{ref:t,className:h("text-lg font-semibold leading-none tracking-tight",i),...s})});U.displayName=H.Dx.displayName;let K=n.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)(H.dk,{ref:t,className:h("text-sm text-muted-foreground",i),...s})});K.displayName=H.dk.displayName;let X=n.forwardRef((e,t)=>{let{className:i,type:s,...r}=e;return(0,a.jsx)("input",{type:s,className:h("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i),ref:t,...r})});X.displayName="Input";var $=i(1424);let ee=[{company:"Jegstudio",role:"Lead Developer",period:"October 2018 – June 2023",description:"Led the development of JNews, a premium WordPress theme, implementing key features and security measures that significantly improved sales and user experience.",isProtected:!1,achievements:[{title:"JNews Development",description:"Led versions 3 through 11 of JNews premium WordPress theme",link:"https://jnews.io",image:"/images/projects/jnews.png",icon:r.Z},{title:"Anti-Piracy Implementation",description:"Increased sales from 50/week to 365/week through enhanced security measures",link:"https://web.archive.org/web/20210924055720/http%3A%2F%2Ftrackvato.com%2Ftf%2F",image:"/images/projects/security.png",icon:R.Z},{title:"Font Preview System",description:"Developed font preview system. This revenue-sharing project between me and Jegstudio",link:"https://font-preview.jegtheme.com/",image:"/images/projects/font-preview.png",icon:Z.Z}]},{company:"Blackbird Media Singapore",role:"Full Stack Developer",period:"April 2023 – December 2023",description:"Developed and maintained multiple high-profile web applications for Singapore-based businesses and organizations.",isProtected:!0,pin:"7901",achievements:[{title:"CDL Commercial",description:"Real estate website",link:"https://www.cdlcommercial.com.sg",image:"/images/projects/cdlcommercial.jpeg",icon:A.Z},{title:"Singapore Short Stay",description:"Property rental platform",link:"https://www.singaporeshortstay.com",image:"/images/projects/sss.png",icon:A.Z},{title:"Trisector",description:"Organization website",link:"https://trisector.org",image:"/images/projects/trisector.jpeg",icon:A.Z},{title:"Sea Communities",description:"Community website",link:"https://seacommunities.com",image:"/images/projects/seacom.png",icon:A.Z}]},{company:"Polar Mass",role:"Full Stack Developer",period:"October 2023 – Present",description:"Developed web applications and automation tools for various clients, focusing on both frontend and backend solutions.",isProtected:!1,achievements:[{title:"Cazbar",description:"Restaurant website",link:"https://www.cazbar.com/",image:"/images/projects/cazbar.jpeg",icon:A.Z},{title:"Homeslyce",description:"Restaurant platform",link:"https://homeslyce.com/",image:"/images/projects/homeslyce.jpeg",icon:A.Z}]}];function et(){let[e,t]=(0,n.useState)(null),[i,r]=(0,n.useState)(""),[o,l]=(0,n.useState)([]),c=()=>{e&&i===e.pin?(l([...o,e.company]),r(""),t(null),$.Am.success("Projects unlocked successfully!")):($.Am.error("Incorrect PIN"),r(""))},d=e=>o.includes(e);return(0,a.jsxs)("section",{id:"projects",className:"min-h-screen py-20 px-4 md:px-8",children:[(0,a.jsxs)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0},className:"max-w-4xl mx-auto",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-12",children:"Work Experience"}),(0,a.jsx)("div",{className:"space-y-16",children:ee.map((e,i)=>(0,a.jsx)(s.E.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.2*i},viewport:{once:!0},children:(0,a.jsx)(W,{className:"overflow-hidden bg-card",children:(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsxs)(M,{className:"p-0 mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,a.jsx)(O,{className:"text-2xl font-bold",children:e.company}),e.isProtected&&!d(e.company)&&(0,a.jsx)(s.E.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"text-primary",onClick:()=>t(e),children:(0,a.jsx)(L.Z,{className:"w-5 h-5"})})]}),(0,a.jsxs)(T,{children:[(0,a.jsx)("span",{className:"text-primary font-medium",children:e.role}),(0,a.jsxs)("span",{className:"text-muted-foreground",children:[" • ",e.period]})]}),(0,a.jsx)("p",{className:"text-muted-foreground mt-4",children:e.description})]}),(0,a.jsx)(V,{className:"p-0",children:!e.isProtected||d(e.company)?(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.achievements.map((e,t)=>{let i=e.icon;return(0,a.jsxs)(s.E.a,{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"group/card overflow-hidden rounded-lg border bg-card",whileHover:{y:-4},children:[(0,a.jsx)("div",{className:"aspect-video overflow-hidden",children:(0,a.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"})}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,a.jsx)(i,{className:"w-4 h-4 text-primary"}),(0,a.jsx)("h4",{className:"font-medium",children:e.title}),(0,a.jsx)(F.Z,{className:"w-4 h-4 ml-auto text-muted-foreground"})]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},t)})}):(0,a.jsx)("div",{className:"flex items-center justify-center p-8",children:(0,a.jsxs)("p",{className:"text-muted-foreground text-center",children:["This project is protected by an NDA.",(0,a.jsx)("br",{}),"Click the lock icon next to the company name and enter the PIN to view details.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"If you don’t have the PIN, contact me."]})})})]})})},i))})]}),(0,a.jsx)(_,{open:!!e,onOpenChange:()=>{t(null),r("")},children:(0,a.jsxs)(q,{children:[(0,a.jsx)(Q,{children:(0,a.jsxs)(U,{children:["Enter PIN for ",null==e?void 0:e.company]})}),(0,a.jsxs)("div",{className:"space-y-4 pt-4",children:[(0,a.jsx)(X,{type:"password",placeholder:"Enter PIN",value:i,onChange:e=>r(e.target.value),onKeyDown:e=>"Enter"===e.key&&c()}),(0,a.jsx)(g,{onClick:c,className:"w-full",children:"Unlock Projects"})]})]})})]})}function ei(){return(0,a.jsxs)("main",{className:"min-h-screen bg-background text-foreground",children:[(0,a.jsx)(o,{}),(0,a.jsx)(v,{}),(0,a.jsx)(E,{}),(0,a.jsx)("section",{className:"min-h-screen flex items-center justify-center p-4 md:p-8",children:(0,a.jsxs)(s.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl w-full",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-6xl font-bold mb-4",children:"Ferdy Sopian"}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl text-muted-foreground mb-8",children:"Full Stack Developer"}),(0,a.jsx)("p",{className:"text-base md:text-lg mb-8",children:"Crafting digital experiences with code and creativity. Specialized in building modern web applications with cutting-edge technologies."}),(0,a.jsxs)(s.E.a,{whileHover:{scale:1.05},href:"#projects",className:"inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full cursor-pointer",children:[(0,a.jsx)(r.Z,{className:"w-5 h-5"}),"View My Work"]})]})}),(0,a.jsx)(C,{}),(0,a.jsx)(I,{}),(0,a.jsx)(et,{})]})}}},function(e){e.O(0,[942,804,971,864,744],function(){return e(e.s=45)}),_N_E=e.O()}]);