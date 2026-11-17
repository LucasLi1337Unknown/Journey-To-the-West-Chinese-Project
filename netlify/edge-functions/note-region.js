const origins=new Set(['https://xiyou-zaowu.netlify.app','https://xiyou-zaowu.vercel.app','https://lucasli1337unknown.github.io']);
export default function(request,context){
 const origin=request.headers.get('origin');
 const headers={'Cache-Control':'private, no-store','Vary':'Origin'};
 if(origin && origins.has(origin))headers['Access-Control-Allow-Origin']=origin;
 if(origin && !origins.has(origin))return new Response(null,{status:403,headers});
 if(request.method!=='GET')return new Response(null,{status:405,headers});
 const g=context.geo;
 return Response.json({country_code:g?.country?.code??null,country_name:g?.country?.name??null,region:g?.subdivision?.name??null,region_code:g?.subdivision?.code??null,city:g?.city??null},{headers});
}
export const config={path:'/api/note-region'};
