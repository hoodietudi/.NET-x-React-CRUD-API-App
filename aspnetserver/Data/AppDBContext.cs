using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => 
            dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] postToSeed = new Post[6];

            for(int i = 0; i < 6; i++)
            {
                postToSeed[i] = new Post()
                {
                    PostId = i + 1,
                    Title = $"Post {i + 1}",
                    Content = $"This is post {i + 1} si ii tare"
                };
            }
            modelBuilder.Entity<Post>().HasData(postToSeed);
        }
    }
}
