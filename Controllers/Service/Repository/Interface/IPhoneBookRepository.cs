using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cib.digital.tech.assessment.phonebook.Controllers.Service.Repository.Interface
{
    public interface IPhoneBookRepository
    {
        Task<bool> Create(PhoneBook phoneBook);

        IOrderedQueryable<PhoneBook> GetAll();
    }
}
