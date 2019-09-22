<script type="text/javascript">

function LoadDetails(TotalFeed) {
 var PostTitles = new Array();
 var PostURLs = new Array();
 var PostLabels=new Array();
 var d="";
 if ("entry" in TotalFeed.feed) {
 var PostEntries = TotalFeed.feed.entry.length;
 for (var PostNum = 0; PostNum < PostEntries; PostNum++) {
	 var ThisPost = TotalFeed.feed.entry[PostNum];
	 PostTitles.push(ThisPost.title.$t);
	 d="";
	if("category"in TotalFeed.feed.entry[PostNum])
	{
	for(var b=0;b<TotalFeed.feed.entry[PostNum].category.length;b++)
		d+='<a href="/search/label/'+TotalFeed.feed.entry[PostNum].category[b].term+'?max-results=8">'+TotalFeed.feed.entry[PostNum].category[b].term+"</a> \u002C "; 
		b=d.lastIndexOf(" \u002C ");-1!=b&&(d=d.substring(0,b))
	}
	 
	 var ThisPostURL;
	 for (var LinkNum = 0; LinkNum < ThisPost.link.length; LinkNum++) {
		 if (ThisPost.link[LinkNum].rel == "alternate") {
		 ThisPostURL = ThisPost.link[LinkNum].href;
		 break;
		 }
	 }
	 PostURLs.push(ThisPostURL);
	 PostLabels.push(d);
 }
 }
 DisplayPosts(PostTitles, PostURLs, PostLabels);
}

function DisplayPosts(PostTitles, PostURLs, PostLabels) {
 var NumberOfEntries = PostTitles.length;
 document.write('<ul>');
 for (var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++) {
	 document.write('<li><a href ="' + PostURLs[EntryNum] + '">' + PostTitles[EntryNum] + "</a> | <span>"+PostLabels[EntryNum]+"</span></li>");
 }
document.write('</ul>');
}
</script>
