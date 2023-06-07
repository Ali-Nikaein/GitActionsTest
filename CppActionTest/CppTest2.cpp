#include <iostream>

int main(int args, char* argv[])
{
    std::cout<<"Hello guys !"<<std::endl;
    int a , b , c;
    std::cout<<"please enter two numbers :"<<std::endl;
    std::cin>>a>>b;
    c = a + b;
    std::cout<<"firts number was : "<< a <<"\nsecond number was : "<< b <<"\nand sum of them is : "<< c <<std::endl;
    return 0;
}
