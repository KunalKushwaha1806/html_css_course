#include <stdio.h>
#include<stdlib.h>

typedef struct myarray
{
    int total_elem;
    int used_elem;
    int *ptr;
}x;

void createarray(x *a, int telem,int uelem){
    a->total_elem=telem;
    a->used_elem=uelem;
    a->ptr=(int*)malloc(telem*sizeof(int));
}

void showval(x *a){
    for (int i = 0; i < a->used_elem; i++)
    {
        printf("%d",(a->ptr)[i]);
    }
    
}


void setval(x *a){
    int n;
    for (int i = 0; i < a->used_elem; i++)
    {
        printf("Enter elements %d\n",i);
        scanf("%d",&n);
        (a->ptr)[i]=n;
    }
    
}

int main(){
    struct myarray marks;
    createarray(&marks ,10,2);
    printf("Now running setval\n");
    setval(&marks);
    printf("Now running showval\n");
    showval(&marks);
    free(marks.ptr);
    return 0;
}