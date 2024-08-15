$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbarToggle").blur(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#bs-example-navbar-collapse-1").collapse('hide');
      }
    });
  });

  #include <bits/stdc++.h>
using namespace std;
struct Node{
  int x,y;
}Edge[100005];
int dis[100005];
int n,m;

int dist(int x1,int y1,int x2,int y2){
  return ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

int main()
{
  scanf("%d",&n);
  while(n--){
    int sum = 0;
    scanf("%d",&m);
    for(int i=0;i<m;i++){
      scanf("%d%d",&Edge[i].x,&Edge[i].y);
    }
    for(int i=0;i<m;i++){
      int num = 0;
      memset(dis,0,sizeof(dis));
      for(int j=0;j<m;j++){
        dis[num++] = dist(Edge[i].x,Edge[i].y,Edge[j].x,Edge[j].y);
    }
    sort(dis,dis+num);
    int ans = 1;
    for(int k=1;k<num;k++){
      if(dis[k] == dis[k-1])ans++;
      else{
        sum += ans*(ans-1);        // 全排列
        ans = 1;                   // 当一个长度计算完后初始化ans，然后继续计算下一个长度的个数
      }
    }
    sum += ans*(ans-1);
  }
    if(!sum)printf("WA\n");
    else printf("%d\n",sum);
  }
  return 0;
}