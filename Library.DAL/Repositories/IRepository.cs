﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL
{
    public interface IRepository<Entity>
    {
        IQueryable<Entity> Get();
        IList<Entity> Get(Func<Entity, bool> where);
        Entity Get(int id);

        void Insert(Entity entity);
        void Update(Entity entity, int id);
        void Delete(Entity entity);
        void Delete(int id);
    }
}
