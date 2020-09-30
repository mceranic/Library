using Library.DAL;
using Microsoft.EntityFrameworkCore;

namespace Library.Test
{
    public class TestContext : LibContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            // define some test database
            optionBuilder.UseNpgsql("User ID=*****;Password=*****;Server=*****;Port=*****;Database=*****;Integrated Security=true;Pooling=true;");

        }
    }
}
