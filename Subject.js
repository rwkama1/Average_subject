class Subject
{
    constructor(parraygrade)
    {
        this.arraygrade=parraygrade;
    }
    calculate_average_grade=()=>
    {
        let average=0;
        let final_average=0;
        let passedfailed=true;
        this.arraygrade.map(
            g=>
            {
                average=average+g.grade;
            }
        )
        final_average=average/this.arraygrade.length;
        if(final_average>=6)
        {
            passedfailed=true;
            
        }
        else
        {
            passedfailed=false;
        }
        return {final_average,passedfailed}
    }
}
module.exports={Subject}